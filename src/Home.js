import React from 'react';
import Slider from 'react-slick';
import slideImage1 from './images/lion.png';
import slideImage2 from './images/rhino.png';
import slideImage3 from './images/hippo.png';
import slideImage4 from './images/elephant.png';
import './styles.css'; // Importing the CSS

const Home = () => {
    // Function to handle smooth scrolling to the contact section
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    // Slider settings for testimonials
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    };

    return (
        <div>
            {/* Hero Section */}
            <header className="hero-section">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>Embark on an Unforgettable Safari Adventure</h1>
                        <p>Discover the wild beauty of Africa on a tailor-made safari experience.</p>
                        <button onClick={scrollToContact} className="cta-button">
                            Book Your Safari
                        </button>
                    </div>
                </div>
            </header>

            {/* Mission, Vision, and Values Section */}
            <section className="mission-vision-values">
                <h2>Our Mission, Vision, and Values</h2>
                <div className="mv-content">
                    <div className="mv-item">
                        <h3>Our Mission</h3>
                        <p>Explore Africa aims at Promoting and marketing East, Central and Southern part of Africa
                            to the world. This is to make awareness of these countries to the world
                            for their information, knowledge, tourism & culture experience.
                        </p>
                    </div>
                    <div className="mv-item">
                        <h3>Our Vision</h3>
                        <p>To build a global community of explorers and raising awareness of African knowledge through
                            the collaborative support of country citizens working together to keep the 
                            African knowledge alive and accessible.</p>
                    </div>
                    <div className="mv-item">
                        <h3>Our Values</h3>
                        <p>Our core values are driven by a desire to improve life, expand access to the African culture
                            knowledge base and at the same time value collaboration.</p>
                        <ul>
                            <li> Provide content rich and insightful information about the African Continent, its people and its diverse culture.</li>
                            <li> Supporting and endorsing natural diversity for sustainable wildlife and communities around for the current and future generation.</li>
                            <li> Strategically focusing efforts on global priority on people, places and cultural experience which will help conserve the many other species which share these habitats and/or are vulnerable to the same threats.</li>
                            <li> To build a global community of explorers and raising awareness of African knowledge through the collaborative support of various parties working together to keep the African knowledge alive and accessible.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <h2>Why Choose Explore Africa?</h2>
                <div className="features">
                    <div className="feature-item">
                        <i className="fas fa-paw"></i>
                        <h3>Expert Guides</h3>
                        <p>Our knowledgeable guides ensure a safe and enriching safari experience.</p>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-globe"></i>
                        <h3>Custom Packages</h3>
                        <p>We offer personalized packages tailored to your preferences and budget.</p>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-tree"></i>
                        <h3>Conservation Focused</h3>
                        <p>We support wildlife conservation efforts with every safari we conduct.</p>
                    </div>
                </div>
            </section>

            {/* Image Slideshow Section */}
            <section className="slideshow">
                <h2>Explore the Wilderness</h2>
                <Slider {...sliderSettings}>
                    <div className="slideshow-item">
                        <img src={slideImage1} alt="Safari 1" />
                    </div>
                    <div className="slideshow-item">
                        <img src={slideImage2} alt="Safari 2" />
                    </div>
                    <div className="slideshow-item">
                        <img src={slideImage3} alt="Safari 3" />
                    </div>
                    <div className="slideshow-item">
                        <img src={slideImage4} alt="Safari 4" />
                    </div>
                    {/* Add more slideshow images as needed */}
                </Slider>
            </section>

            {/* Contact Section (for smooth scroll) */}
            <section id="contact">
                <div className="hosted-countries">
                    <h3>Countries We Cover:</h3>
                    <ul>
                        <li><a href='https://www.google.com/search?q=botswana' target="_blank" rel="noreferrer">Botswana</a></li>
                        <li><a href='https://www.google.com/search?q=burundi' target="_blank" rel="noreferrer">Burundi</a></li>
                        <li><a href='https://www.google.com/search?q=kenya' target="_blank" rel="noreferrer">Kenya</a></li>
                        <li><a href='https://www.google.com/search?q=malawi' target="_blank" rel="noreferrer">Malawi</a></li>
                        <li><a href='https://www.google.com/search?q=mozambique' target="_blank" rel="noreferrer">Mozambique</a></li>
                        <li><a href='https://www.google.com/search?q=rwanda' target="_blank" rel="noreferrer">Rwanda</a></li>
                        <li><a href='https://www.google.com/search?q=tanzania' target="_blank" rel="noreferrer">Tanzania</a></li>
                        <li><a href='https://www.google.com/search?q=uganda' target="_blank" rel="noreferrer">Uganda</a></li>
                        <li><a href='https://www.google.com/search?q=zambia' target="_blank" rel="noreferrer">Zambia</a></li>
                        <li><a href='https://www.google.com/search?q=zimbabwe' target="_blank" rel="noreferrer">Zimbabwe</a></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
