import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page py-5">
      <div className="container">

        {/* Hero Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Get in Touch with GrowFund</h2>
          <p className="lead text-muted">
            We're here to answer your questions and provide support. Reach out anytime!
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="row g-4">
          {/* Left Column: Contact Info */}
          <div className="col-lg-5">
            <div className="contact-info p-4 shadow-sm rounded">
              <h4 className="fw-bold mb-3">Contact Details</h4>
              <p><strong>Address:</strong> 123 Wall Street, New York, NY, USA</p>
              <p><strong>Email:</strong> support@growfund.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>

              <h5 className="mt-4 mb-3">Follow Us</h5>
              <div className="social-links d-flex gap-3">
                <a href="#" className="social-icon">🌐</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">💼</a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-7">
            <form className="contact-form p-4 shadow-sm rounded">
              <h4 className="fw-bold mb-3">Send Us a Message</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <input type="text" className="form-control mt-3" placeholder="Subject" required />
              <textarea className="form-control mt-3" rows="5" placeholder="Message" required></textarea>
              <button type="submit" className="btn btn-primary mt-3">Send Message</button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="map-container mt-5 shadow-sm rounded">
          <iframe
            title="GrowFund Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.986731543503!2d-74.00711948459362!3d40.712775179330095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316da96b05%3A0x6a8b5b2c7b0b5aaf!2sWall%20Street%2C%20New%20York%2C%20NY%2010005%2C%20USA!5e0!3m2!1sen!2ske!4v1696726272470!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
