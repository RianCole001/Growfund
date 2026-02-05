import React from "react";
import "./InvestmentPlans.css";

const plans = [
  {
    key: "crypto",
    name: "Crypto Coins",
    tag: "High Upside",
    min: "$5",
    returnText: "12-40%+",
    risk: "High",
    desc: "The Goal: Buy coins at curated entry prices before the general market drives them higher.The Process: Our team identifies assets with upcoming growth catalysts and provides you with the specific targets to buy and sell.investor Edge: You gain the high upside of crypto without the stress of constant market monitoring.",
    bullets: ["Diversified crypto basket", "Active risk management", "24/7 market access"],
    cta: "Explore Crypto",
    accent: "#ff4d4d"
  },
  {
    key: "highyield",
    name: "High-Yield Strategy",
    tag: "Fixed Term",
    min: "$5",
    returnText: "15-60%",
    risk: "Med-High",
    desc: "Structured products and vetted venture allocations with defined lock-up periods.The higher the investment, the more interest you get.",
    bullets: ["Structured instruments", "Quarterly payouts", "Professional selection"],
    cta: "View High-Yield",
    accent: "#dc3545"
  },
  {
    key: "realestate",
    name: "Fractional Real Estate",
    tag: "Passive Income",
    min: "$50",
    returnText: "8-18%",
    risk: "Moderate",
    desc: "Fractional ownership in prime properties delivering rental income and appreciation.",
    bullets: ["Fractional ownership", "Asset management", "Income-focused"],
    cta: "Browse Properties",
    accent: "#a80000"
  },
];

const InvestmentPlans = () => {
  return (
    <section id="plans" className="plans-section py-5 position-relative overflow-hidden">
      {/* Visual background accents */}
      <div className="bg-blur-circle top-left"></div>
      <div className="bg-blur-circle bottom-right"></div>

      <div className="container position-relative">
        <div className="text-center mb-5">
          <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill mb-3 fw-bold">OUR PORTFOLIOS</span>
          <h2 className="display-5 fw-bold text-dark">Investment <span className="text-danger">Plans</span></h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            Institutional-grade strategies tailored for growth, yield, or steady income.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((p, idx) => (
            <div key={p.key} className="col-lg-4 col-md-6">
              <article className="premium-plan-card h-100" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="card-image-container">
                  <img src={
                    p.key === 'crypto'
                      ? 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80'
                      : p.key === 'highyield'
                      ? 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
                  } alt={p.name} className="plan-img" />
                  <div className="plan-tag-overlay">{p.tag}</div>
                </div>

                <div className="plan-body p-4">
                  <h3 className="h4 fw-bold mb-2">{p.name}</h3>
                  <p className="small text-muted mb-4">{p.desc}</p>

                  <div className="stat-grid mb-4">
                    <div className="stat-item">
                      <span className="stat-label">Min. Deposit</span>
                      <span className="stat-value text-dark">{p.min}</span>
                    </div>
                    <div className="stat-item border-start ps-3">
                      <span className="stat-label">Target Yield</span>
                      <span className="stat-value text-danger">{p.returnText}</span>
                    </div>
                  </div>

                  <ul className="plan-check-list list-unstyled mb-4">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="small mb-2 d-flex align-items-center">
                        <span className="check-icon me-2">✓</span> {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3 d-flex align-items-center justify-content-between">
                    <span className="risk-indicator small fw-bold text-muted uppercase">Risk: {p.risk}</span>
                    <button className="btn btn-danger rounded-pill px-4 fw-bold shadow-sm hover-grow" onClick={() => alert(p.cta)}>
                      {p.cta}
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
           <p className="text-muted small opacity-75" style={{maxWidth: '800px', margin: '0 auto'}}>
             Disclaimer: Capital at risk. Past performance is not indicative of future results. Products vary by jurisdiction.
           </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;