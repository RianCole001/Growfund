import React, { useState } from "react";
import "./InvestmentOpportunities.css";

const InvestmentOpportunities = () => {
  const [activeTab, setActiveTab] = useState("Crypto");

  const opportunities = {
    Crypto: {
      title: "Top Performing Assets",
      desc: "Access a curated selection of high-potential coins and DeFi tokens.",
      stats: [{ label: "Active Coins", val: "250+" }, { label: "Trend", val: "Bullish" }],
      img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80",
      btn: "Buy Coins",
    },
    "High-Yield": {
      title: "60% Return Plan",
      desc: "Strategic liquidity mining and venture capital for maximum velocity.",
      stats: [{ label: "Target", val: "60%" }, { label: "Lock", val: "12 Mo." }],
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
      btn: "Invest Now",
    },
    "Real Estate": {
      title: "Digital Real Estate",
      desc: "Own fractional shares of prime commercial and residential properties.",
      stats: [{ label: "Min.", val: "$500" }, { label: "Yield", val: "12-18%" }],
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      btn: "View Properties",
    },
  };

  const data = opportunities[activeTab];

  return (
    <section className="invest-section py-5">
      <div className="container">
        
        <div className="text-center mb-5">
          <span className="badge-custom mb-3">PROFIT CENTERS</span>
          <h2 className="display-6 fw-bold">
            Key <span className="text-muted opacity-50">opportunities</span>
          </h2>
        </div>

        {/* This wrapper MUST match the CSS below */}
        <div className="tab-pill-wrapper shadow-sm mb-5" role="tablist" aria-label="Investment opportunity tabs">
          {Object.keys(opportunities).map((tabName) => (
            <button
              key={tabName}
              type="button"
              role="tab"
              aria-selected={activeTab === tabName}
              aria-controls={`panel-${tabName.replace(/\s+/g, "-")}`}
              id={`tab-${tabName.replace(/\s+/g, "-")}`}
              onClick={() => setActiveTab(tabName)}
              className={`tab-pill-item ${activeTab === tabName ? "active" : ""}`}
            >
              {tabName}
            </button>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="modern-card border-0 shadow-lg rounded-5 overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6 position-relative" id={`panel-${activeTab.replace(/\s+/g, "-")}`} role="tabpanel" aria-labelledby={`tab-${activeTab.replace(/\s+/g, "-")}`}>
                  <img src={data.img} alt={`${activeTab} preview`} className="img-fluid h-100 w-100 object-fit-cover card-img-side" />
                  <div className="trending-tag-glass">Trending 🔥</div>
                </div>
                <div className="col-md-6 p-4 p-lg-5 bg-white d-flex flex-column justify-content-center">
                  <h3 className="fw-bold h2 mb-3">{data.title}</h3>
                  <p className="text-muted mb-4 lead-sm">{data.desc}</p>
                  
                  <div className="row g-3 mb-4">
                    {data.stats.map((s, i) => (
                      <div key={i} className="col-6">
                        <div className="stat-box-modern p-3 rounded-4">
                          <div className="h3 fw-bold text-danger mb-0">{s.val}</div>
                          <div className="stat-label">{s.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="btn btn-danger btn-lg rounded-pill w-100 py-3 fw-bold shadow-sm hover-up">
                    {data.btn} ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;