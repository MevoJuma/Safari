import React from 'react';
import './styles.css'; // External CSS for styling

const PackagesSection = () => (
    <section id="packages" className="packages-section">
        <div className="packages-container">
            <h2>Safari Packages</h2>
            <p>Explore our exclusive safari packages designed for every kind of adventurer.</p>
            <div className="packages-grid">
                {/* Package 1 */}
                <div className="package">
                    <img src="/path/to/package1.jpg" alt="Package 1" className="package-image" />
                    <h3>Wildlife Safari</h3>
                    <p>Discover the wild with our guided wildlife safari, featuring top destinations in Africa.</p>
                    <p className="package-price">$1,500 per person</p>
                    <button className="cta-button">Learn More</button>
                </div>

                {/* Package 2 */}
                <div className="package">
                    <img src="/path/to/package2.jpg" alt="Package 2" className="package-image" />
                    <h3>Luxury Safari</h3>
                    <p>Experience luxury in the wild with our exclusive 5-star safari lodges and personalized service.</p>
                    <p className="package-price">$3,000 per person</p>
                    <button className="cta-button">Learn More</button>
                </div>

                {/* Package 3 */}
                <div className="package">
                    <img src="/path/to/package3.jpg" alt="Package 3" className="package-image" />
                    <h3>Adventure Safari</h3>
                    <p>For the thrill-seekers, this package offers exciting activities like hot air balloon rides and mountain trekking.</p>
                    <p className="package-price">$2,200 per person</p>
                    <button className="cta-button">Learn More</button>
                </div>

                {/* Add more packages as needed */}
            </div>
        </div>
    </section>
);

export default PackagesSection;
