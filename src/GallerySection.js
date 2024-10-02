import React from 'react';
import safari00 from './images/lion.png'
import safari01 from './images/rhino.png'
import safari02 from './images/hippo.png'
import safari03 from './images/elephant.png'
import safari04 from './images/africabg.png'
import safari05 from './images/woman.png'
import safari06 from './images/zebra.png'
import safari07 from './images/wildbeest.png'
import safari08 from './images/sunG.png'
import safari09 from './images/sun02.png'
import safari10 from './images/sun01.png'
import safari11 from './images/sav03.png'
import './styles.css'; // External CSS file for GallerySection styles

const GallerySection = () => (
    <section id="gallery" className="gallery-section">
        <div className="gallery-container">
            <h2>Photo Gallery</h2>
            <p>Explore the beauty of African safaris through our photo gallery.</p>
            <div className="gallery-grid">
                {/* Add your images here */}
                <img src={safari00} alt="Africa" className="gallery-item" />
                <img src={safari01} alt="Safari 2" className="gallery-item" />
                <img src={safari02} alt="Safari 3" className="gallery-item" />
                <img src={safari03} alt="Safari 4" className="gallery-item" />
                <img src={safari04} alt="Safari 5" className="gallery-item" />
                <img src={safari05} alt="Safari 6" className="gallery-item" />

                <img src={safari06} alt="Africa" className="gallery-item" />
                <img src={safari07} alt="Safari 2" className="gallery-item" />
                <img src={safari08} alt="Safari 3" className="gallery-item" />
                <img src={safari09} alt="Safari 4" className="gallery-item" />
                <img src={safari10} alt="Safari 5" className="gallery-item" />
                <img src={safari11} alt="Safari 6" className="gallery-item" />
                {/* Add more images as needed */}
            </div>
        </div>
    </section>
);

export default GallerySection;
