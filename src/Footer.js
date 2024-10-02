import React from 'react';
import './styles.css'; // External CSS file for Footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>About Safari Engine</h3>
                    <p>Your trusted partner in crafting unforgettable safari experiences in Africa. Explore the wild, discover new horizons, and create memories that last a lifetime.</p>
                </div>
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        {/* <li><a href="#packages">Packages</a></li> */}
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: info@safariengine.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Location: Dubai</p>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Safari Engine. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
