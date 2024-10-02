import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './Home';
import AboutSection from './AboutSection';
import GallerySection from './GallerySection';
import Footer from './Footer';
import ContactForm from './ContactForm';
import companyLogo from './images/Safari Engine Logo.png'; // Correct path to your logo image
import './styles.css';

const App = () => (
    <Router>
        <div className="App">
        <nav className="navbar">
    {/* Logo Section */}
    <div className="navbar-logo">
        <Link to="/">
            <img src={companyLogo} alt="Company Logo" />
        </Link>
    </div>

    {/* Navigation Links */}
    <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
</nav>


            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutSection />} />
                    <Route path="/gallery" element={<GallerySection />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </Router>
);

export default App;
