import React from 'react';
import './styles.css'; // External CSS file for AboutSection styles

// Placeholder images for mission, goals, and values. Replace with your actual images.
import goalsImage from './images/africa-background-.png';
import valuesImage from './images/images.png';
import missionImage from './images/images.png';

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <h2>About Explore Africa</h2>
                <p>
                    Africa is so special and diverse that it should be on everyone's bucket list. whether you're into wild adventure, sports,
                    arts and crafts, or just enjoying relaxing in the sun. Africa has something for everyone. No wonder people have flocked in it 
                    for years!
                </p>
                <p>
                    Eastern and Southern part of Africa is known for its benevolent beauty, rich and diverse ulture. Many Parts of the world
                    especially the Middle East, South and Central
                    Asia and even some of the African countries have little Knowledge of this particular region.
                </p>
                <p>
                    Here is where Safari Engine comes in place, our main objective is to shade the light into 
                    the magnificent and these amazing places to be. We will be promoting all aspects of 
                    culture to the world in terms of language, customs, traditions, tourist attractions,
                    the knowledge and information they hold and so more.
               </p>    

                <p>
                    Not only will we be promoting the cultural experience of these African
                    courtiers but also we will act as a linkage between them and the 
                    visitors. We will be providing an online portal that will facilitate
                    services like booking and even an online curio shop for
                    interested visitors.  
                        
                </p>

                {/* Mission Section */}
                <div className="about-section-item">
                    <div className="about-text">
                        <h3>Our Mission</h3>
                        <p>
                           Safari Engine aims at promoting and marketing East, Central
                           and Southern part of Africa to the world. This is to make awareness of these countries to the world
                           for their information, knowledge, tourism & culture experience.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={missionImage} alt="Our Missiom" />
                    </div>
                </div>

                {/* Goals Section */}
                <div className="about-section-item">
                    <div className="about-image">
                        <img src={goalsImage} alt="Our Goals" />
                    </div>
                    <div className="about-text">
                        <h3>Our Vision</h3>
                        <p>
                           To build a global community of explorers and raising awareness of African Knowledge
                           through the collaborative support of country citizens working together to keep
                           the African knowledge alive and accessible.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="about-section-item">
                    <div className="about-text">
                        <h3>Our Values</h3>
                        <p>
                            We value sustainability, respect for nature, and a commitment to preserving the cultural heritage and natural environments of the areas we explore.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={valuesImage} alt="Our Values" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

