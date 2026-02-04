import React from "react";

const InvestmentGuide = () => {
  return (
    <section className="guide-section py-5 bg-dark text-white">
      <div className="container py-5">
        {/* Header matching the italic/bold style of the reference */}
        <h2 className="display-5 fw-light mb-5">
          <span className="fw-bold">Begin your investment</span> <span className="fst-italic text-secondary opacity-75">with confidence</span>
        </h2>

        <div className="row g-5">
          {/* Column 1: How to get started */}
          <div className="col-lg-5 border-end border-secondary border-opacity-25 pe-lg-5">
            <div className="d-flex align-items-center mb-4">
              <span className="badge bg-danger rounded-circle p-0 d-flex align-items-center justify-content-center fw-bold me-3" style={{width: '40px', height: '40px'}}>1</span>
              <h3 className="fw-bold h4 mb-0">How to get started</h3>
            </div>
            <p className="text-secondary mb-5 fs-5">
              A simple step-by-step guide to help you begin your trading journey, 
              outlining the tools available and your path to 60% growth.
            </p>
            <button className="btn btn-danger btn-lg rounded-pill px-5 py-2 shadow-sm border-0">
              Learn more ↗
            </button>
          </div>

          {/* Column 2: How we support you */}
          <div className="col-lg-7 ps-lg-5">
            <div className="d-flex align-items-center mb-5">
              <span className="badge bg-danger rounded-circle p-0 d-flex align-items-center justify-content-center fw-bold me-3" style={{width: '40px', height: '40px'}}>2</span>
              <h3 className="fw-bold h4 mb-0">How we support you</h3>
            </div>

            <div className="row g-4">
              {/* Feature 1 */}
              <div className="col-md-6 mb-3">
                <h5 className="fw-bold text-white mb-2 border-start border-danger border-3 ps-3">Market Promotion</h5>
                <p className="text-secondary small ps-3">
                  We facilitate high-growth trading by providing insights and connecting investors to crypto opportunities.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="col-md-6 mb-3">
                <h5 className="fw-bold text-white mb-2 border-start border-danger border-3 ps-3">Trade Facilitation</h5>
                <p className="text-secondary small ps-3">
                  We streamline investments by linking traders directly to global liquidity through our platform.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="col-md-6 mb-3">
                <h5 className="fw-bold text-white mb-2 border-start border-danger border-3 ps-3">Aftercare Support</h5>
                <p className="text-secondary small ps-3">
                  We offer 24/7 technical assistance to ensure your portfolio operations run smoothly at all times.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="col-md-6 mb-3">
                <h5 className="fw-bold text-white mb-2 border-start border-danger border-3 ps-3">Climate & Research</h5>
                <p className="text-secondary small ps-3">
                  We advocate for a secure trading environment and provide research to support informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuide;