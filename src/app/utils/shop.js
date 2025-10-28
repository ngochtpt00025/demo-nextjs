export function getCart() {
    try {
        const raw = localStorage.getItem('cart');
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        console.log(error);
        return [];
    }
}
export function saveCart(cart) {
    try {
        localStorage.setItem('cart', JSON.stringify(cart))
    } catch (e) {
        console.log('saveCart error: ', e);
    }
}