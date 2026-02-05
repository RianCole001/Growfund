import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer bg-dark text-light py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="footer-brand fw-bold">Growfund</h5>
            <p className="small text-muted">Invest smarter — access curated opportunities across crypto, high-yield products, and fractional real estate.</p>
            <div className="socials mt-3">
              <a aria-label="Twitter" href="#" className="social-link me-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.32.48-2.04.56.73-.44 1.28-1.12 1.54-1.94-.68.4-1.44.7-2.24.86C18.86 4.68 17.78 4 16.5 4c-1.98 0-3.58 1.6-3.58 3.58 0 .28.03.55.09.81C9.7 8.25 6.32 6.6 4.1 3.9c-.31.5-.5 1.08-.5 1.7 0 1.17.6 2.2 1.53 2.8-.56-.02-1.08-.17-1.54-.42v.04c0 1.63 1.16 2.99 2.7 3.3-.28.08-.58.12-.88.12-.22 0-.44-.02-.65-.06.44 1.36 1.72 2.36 3.24 2.39-1.2.94-2.7 1.5-4.32 1.5-.28 0-.57-.02-.85-.05C6.9 19.54 8.84 20 10.9 20c6.54 0 10.12-5.42 10.12-10.12v-.46c.7-.5 1.3-1.12 1.78-1.82-.66.28-1.36.48-2.08.56z" fill="currentColor"/></svg>
              </a>
              <a aria-label="LinkedIn" href="#" className="social-link me-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 21H3.56V8.99h3.38V21zM5.25 7.6C4.1 7.6 3.2 6.68 3.2 5.52 3.2 4.36 4.1 3.44 5.25 3.44c1.16 0 2.06.92 2.06 2.08 0 1.16-.9 2.08-2.06 2.08zM21 21h-3.38v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96V21H10.6V8.99h3.25v1.6h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.16V21z" fill="currentColor"/></svg>
              </a>
              <a aria-label="GitHub" href="#" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.5 3.14-1.18 3.14-1.18.62 1.57.23 2.73.12 3.02.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68.41.36.77 1.08.77 2.17 0 1.57-.01 2.84-.01 3.23 0 .3.21.67.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#invest">Opportunities</a></li>
              <li><a href="#guide">How it works</a></li>
              <li><a href="#why">Why Invest</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="fw-bold">Contact</h6>
            <address className="small text-muted mb-2">123 Growth Ave, Suite 400<br/>Capital City, CA United State</address>
            <div className="small"><a href="mailto:hello@growfund.com">Growfundinvestments@gmail.com</a> · <a href="tel:+1234567890">+1 (234) 567-890</a></div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between small">
          <div className="mb-2">© {new Date().getFullYear()} Growfund. All rights reserved.</div>
          <div>
            <a href="/privacy" className="me-3">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
