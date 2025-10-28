'use client'
import React, {Children, createContext, useContext, useEffect, useMemo, useState} from "react"
import { getCart,saveCart } from "@/app/utils/shop"

const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);

    // load cart from localStorage when component mount (client-side)
    useEffect(() => {
        const initial = getCart();
        setCart(initial);
    },[]);

    //when cart is change => save to localStorage
    useEffect(() => {
        saveCart(cart);
    }, [cart]);

    const total = useMemo(() => {
        let sum = 0;
        cart.forEach(c => {
            const digits = String(c.price).replace(/[^\d]/g);
            const value = digits ? parseInt(digits, 10) : 0;
            sum += value * (c.quantity || 1);
        })
        return sum;
    }, [cart])

    function formatCash(num) {
        const string = String(num);
        return string.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const totalDisplay = `Rp ${formatCash(total)}`;

    // action
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(v => !v);

    const addToCart = (product) => {
        setCart((prev) => {
            const found = prev.find((p) => p.id === product.id);
            if (found) {
                return prev.map(p => p.id === product.id ? {...p, quantity: (p.quantity || 1) + (product.quantity || 1)} : p)
            } else {
                return [...prev, {...product, quantity: product.quantity || 1}];
            }
        })
        open();
    }    

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(p => p.id === id));
    }

    const value = {
        isOpen,
        open,
        close,
        toggle,
        cart,
        setCart,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const ctx = useContext(CartContext);
    return ctx;
}