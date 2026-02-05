import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Link for client-side routing
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min.js";

const Hero = ({ title, subtitle, buttonText, buttonLink = "/journey", images = [] }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap carousel
    const imgs = images && images.length ? images : [];
    if (carouselRef.current && imgs.length) {
      const bsCarousel = new Carousel(carouselRef.current, {
        interval: 3000,
        ride: "carousel",
        pause: "hover",
      });
      return () => bsCarousel.dispose(); // Cleanup
    }
  }, [images]);

  const carouselImages = images && images.length
    ? images
    : [
        {
          src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80",
          alt: "Hero",
          caption: "",
        },
      ];

  return (
    <section className="hero-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold text-success">{title}</h1>
            <p className="lead text-secondary">{subtitle}</p>

            {buttonText && (
              <Link to={buttonLink} className="btn btn-success btn-lg mt-3">
                {buttonText}
              </Link>
            )}
          </div>

          {/* Right Carousel */}
          <div className="col-lg-6">
            <div ref={carouselRef} id="heroCarousel" className="carousel slide">
              <div className="carousel-inner rounded shadow">
                {carouselImages.map((img, index) => (
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
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
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
