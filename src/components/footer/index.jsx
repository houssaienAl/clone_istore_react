import React from 'react';
import './footer.css';

export const Footer = (props) => {
    return (
        <footer>
            <div className="newsletter">
                <h>Abonnez-vous à notre Newsletter</h>
                <p>et recevez toutes nos nouveautés et nos promotions</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Votre adresse e-mail" />
                    <button type="submit">S'abonner</button>
                </form>
            </div>

            <div className="footer-icons">
                <div className="icon-item">
                    <i className="fab fa-apple"></i>
                    <p>Revendeur Agréé Apple</p>
                </div>
                <div className="icon-item">
                    <i className="fas fa-home"></i>
                    <p>Livraison à domicile</p>
                </div>
                <div className="icon-item">
                    <i className="fas fa-phone"></i>
                    <p>Service commerciale 58 402 400</p>
                </div>
                <div className="icon-item">
                    <i className="fas fa-money-bill-wave"></i>
                    <p>Paiement à la livraison</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="info-links">
                    <h4>S'informer</h4>
                    <ul>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Livraison</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Contactez-nous</a></li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h4>Nous contacter</h4>
                    <p><strong>iTech Store</strong></p>
                    <p>Boulevard Grand Maghreb Arabe, Sousse</p>
                    <hr color='darkgray' />
                    <p>58 402 400 | 56 603 604</p>
                    <p>store@itech.tn</p>
                </div>
            </div>

            <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-vimeo-v"></i>
            </div>
        </footer>
    );
};

export default Footer;
