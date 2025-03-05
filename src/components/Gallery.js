import React from 'react';


const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {/* Gallery Item 1 */}
        <div className="gallery-item">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Gallery Item 1"
            className="gallery-image"
          />
          <div className="overlay"></div>
          <div className="caption">Item 1</div>
        </div>

        {/* Gallery Item 2 */}
        <div className="gallery-item">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Gallery Item 2"
            className="gallery-image"
          />
          <div className="overlay"></div>
          <div className="caption">Item 2</div>
        </div>

        {/* Gallery Item 3 */}
        <div className="gallery-item">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Gallery Item 3"
            className="gallery-image"
          />
          <div className="overlay"></div>
          <div className="caption">Item 3</div>
        </div>

        {/* Gallery Item 4 */}
        <div className="gallery-item">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Gallery Item 4"
            className="gallery-image"
          />
          <div className="overlay"></div>
          <div className="caption">Item 4</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
