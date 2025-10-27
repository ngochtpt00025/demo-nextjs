import Link from "next/link";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Funiro.</h2>
                        <p>400 University Drive Suite 200 Coral<br/>Gables,<br/>FL 33134 USA</p>
                        </div>

                            <div className="footer-links">
                                <h4>Links</h4>
                                <ul>
                                    <li><Link href="#">Home</Link></li>
                                    <li><Link href="#">Shop</Link></li>
                                    <li><Link href="#">About</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="footer-help">
                                <h4>Help</h4>
                                <ul>
                                    <li><Link href="#">Payment Options</Link></li>
                                    <li><Link href="#">Returns</Link></li>
                                    <li><Link href="#">Privacy Policies</Link></li>
                                </ul>
                            </div>

                            <div className="footer-newsletter">
                                <h4>Newsletter</h4>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="Enter Your Email Address"/>
                                        <button type="submit">SUBSCRIBE</button>
                                </div>
                            </div>
                    </div>

                    <div className="footer-bottom">
                        <hr/>
                            <p>2023 furino. All rights reverved</p>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;