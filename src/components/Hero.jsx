import React, { useEffect, useRef } from "react";
// Import the Bootstrap JS (make sure you've run: npm install bootstrap)
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min.js"; 

const Hero = ({ title, subtitle, buttonText, buttonLink, images }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Manually initialize the carousel when the component mounts
    if (carouselRef.current) {
      const bsCarousel = new Carousel(carouselRef.current, {
        interval: 3000, // Speed in milliseconds
        ride: 'carousel',
        pause: 'hover'   // Optional: pauses when user mouses over image
      });
      
      return () => bsCarousel.dispose(); // Cleanup on unmount
    }
  }, []);

  return (
    <section className="hero-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold text-success">{title}</h1>
            <p className="lead text-secondary">{subtitle}</p>
            {buttonText && buttonLink && (
              <a href={buttonLink} className="btn btn-success btn-lg mt-3">
                {buttonText}
              </a>
            )}
          </div>

          <div className="col-lg-6">
            <div
              ref={carouselRef} // ✅ Attach the reference here
              id="heroCarousel"
              className="carousel slide"
            >
              <div className="carousel-inner rounded shadow">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={img.src}
                      className="d-block w-100"
                      alt={img.alt}
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    {img.caption && (
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded">
                        <h5>{img.caption}</h5>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;