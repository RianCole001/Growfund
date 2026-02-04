import React from "react";

const WhyInvest = () => {
  const platformFeatures = [
    {
      badge: "Fast",
      title: "Lightning Execution",
      description: "Trade in milliseconds. Our high-frequency engine ensures you never miss a market move.",
      color: "primary"
    },
    {
      badge: "Low Fee",
      title: "Zero Commission",
      description: "Maximize your returns with 0% commission on selected investment plans and ultra-tight spreads.",
      color: "success"
    },
    {
      badge: "Secure",
      title: "Bank-Grade Security",
      description: "Your assets are protected by multi-layer encryption and cold storage solutions.",
      color: "info"
    },
    {
      badge: "AI",
      title: "Smart Analytics",
      description: "Get an edge with AI-driven market insights and real-time sentiment analysis.",
      color: "warning"
    },
    {
      badge: "24/7",
      title: "Global Markets",
      description: "Trade ,invest 24/7 across growfund, growfund plans, and Global Equities from a single dashboard.",
      color: "danger"
    },
    {
      badge: "Easy",
      title: "Intuitive Interface",
      description: "Designed for both pros and beginners. Clean, powerful, and ridiculously easy to use.",
      color: "secondary"
    },
  ];

  return (
    <section className="why-invest py-5 bg-dark text-white">
      <div className="container py-4">
        <div className="row mb-5 align-items-end">
          <div className="col-lg-6">
            <h6 className="text-warning fw-bold text-uppercase">The Future of Investors</h6>
            <h2 className="display-5 fw-bold mb-0">Why choose our platform?</h2>
          </div>
          <div className="col-lg-6">
            <p className="lead text-secondary mb-0">Join 50,000+ investors,
                
                traders navigating the markets with our cutting-edge technology.</p>
          </div>
        </div>

        <div className="row g-4">
          {platformFeatures.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 bg-secondary bg-opacity-10 border-0 p-4 platform-card">
                <div className="card-body">
                  <span className={`badge bg-${item.color} mb-3 px-3 py-2 rounded-pill`}>
                    {item.badge}
                  </span>
                  <h4 className="card-title fw-bold text-white mb-3">{item.title}</h4>
                  <p className="card-text text-secondary">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;