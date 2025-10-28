import Link from 'next/link';
import '../style/style.css';
import '../style/style_cart-offcanvas.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/components/cart/CartContext';
import CartOffcanvas from '@/components/cart/CartOffcanvas';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartOffcanvas/>
        </CartProvider>
      </body>
    </html>
  )
}
