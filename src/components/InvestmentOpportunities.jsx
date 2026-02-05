import React, { useState } from "react";

const InvestmentOpportunities = () => {
  const [activeTab, setActiveTab] = useState("Crypto");

  const opportunities = {
    Crypto: {
      title: "Top Performing Assets",
      description: "Access a curated selection of high-potential coins. From Bitcoin and Ethereum to emerging DeFi tokens.",
      stat1: "Active Coins", val1: "250+",
      stat2: "Market Trend", val2: "Bullish",
      img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80",
      btnText: "Buy Coins",
    },
    "High-Yield": {
      title: "60% Return Growth Plan",
      description: "Our signature 'Vibrant Growth' plan targeting 60% returns through strategic liquidity mining.",
      stat1: "Target Return", val1: "60%",
      stat2: "Lock Period", val2: "12 Mo.",
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
      btnText: "Invest Now",
    },
    "Real Estate": {
      title: "Digital Real Estate",
      description: "Invest in high-value properties without the paperwork. Own fractional shares globally.",
      stat1: "Min. Entry", val1: "$500",
      stat2: "Avg. Yield", val2: "12-18%",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      btnText: "View Properties",
    },
  };

  const data = opportunities[activeTab];

  return (
    <section className="opportunities-section py-4 py-md-5 bg-white">
      <div className="container">
        
        {/* 1. TABS FIRST (Mobile-First View) */}
        <div className="tabs-wrapper mb-3">
          <ul className="nav nav-underline custom-nav-scroll">
            {Object.keys(opportunities).map((tab) => (
              <li className="nav-item" key={tab}>
                <button
                  className={`nav-link fw-bold border-0 bg-transparent ${
                    activeTab === tab ? "active text-danger border-bottom border-danger border-3" : "text-secondary opacity-75"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. HEADER BELOW TABS */}
        <div className="row align-items-center mb-4 g-2">
          <div className="col-8 col-md-auto">
            <h6 className="text-danger text-uppercase fw-bold m-0 small">Profit Centers</h6>
            <h2 className="fw-bold h1-mobile m-0">Key <span className="text-secondary opacity-50">opportunities</span></h2>
          </div>
          <div className="col-4 col-md-auto text-end">
            <button className="btn btn-outline-danger btn-sm rounded-pill px-2 px-md-3">View all ↗</button>
          </div>
        </div>

        {/* 3. MAIN CONTENT */}
        <div className="row g-4 mt-2">
          <div className="col-12 col-lg-6 order-lg-2">
            <div className="image-wrapper rounded-4 shadow-sm position-relative overflow-hidden">
              <img src={data.img} className="img-fluid opportunity-img" alt={activeTab} />
              <span className="badge bg-danger position-absolute top-0 end-0 m-3 p-2">Trending 🔥</span>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h3 className="fw-bold mt-2">{data.title}</h3>
            <p className="text-muted small-mobile-text">{data.description}</p>
            <div className="row g-0 border-top border-bottom py-3 my-4">
              <div className="col-6">
                <div className="h2 fw-bold text-danger mb-0">{data.val1}</div>
                <div className="small text-uppercase text-muted fw-bold">{data.stat1}</div>
              </div>
              <div className="col-6 border-start ps-3 border-danger">
                <div className="h2 fw-bold text-dark mb-0">{data.val2}</div>
                <div className="small text-uppercase text-muted fw-bold">{data.stat2}</div>
              </div>
            </div>
            <button className="btn btn-danger btn-lg rounded-pill w-100 w-md-auto px-5">
              {data.btnText} ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;