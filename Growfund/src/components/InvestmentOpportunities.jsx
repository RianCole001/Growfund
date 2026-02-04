import React, { useState } from "react";

const InvestmentOpportunities = () => {
  const [activeTab, setActiveTab] = useState("Crypto");

  const opportunities = {
    Crypto: {
      title: "Top Performing Assets",
      description: "Access a curated selection of high-potential coins. From Bitcoin and Ethereum to emerging DeFi tokens, trade the assets shaping the future of finance.",
      stat1: "Active Coins",
      val1: "250+",
      stat2: "Market Trend",
      val2: "Bullish",
      img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80",
      btnText: "Buy Coins",
    },
    "High-Yield": {
      title: "60% Return Growth Plan",
      description: "Our signature 'Vibrant Growth' money investment plan is designed for maximum velocity, targeting 60% returns through strategic liquidity mining and venture capital.",
      stat1: "Target Return",
      val1: "60%",
      stat2: "Lock Period",
      val2: "12 Mo.",
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
      btnText: "Invest Now",
    },
    "Real Estate": {
      title: "Digital Real Estate",
      description: "Invest in high-value properties without the paperwork. Own fractional shares of prime commercial and residential real estate globally.",
      stat1: "Min. Entry",
      val1: "$500",
      stat2: "Avg. Yield",
      val2: "12-18%",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      btnText: "View Properties",
    },
  };

  const data = opportunities[activeTab];

  return (
    <section className="opportunities-section py-5 bg-white">
      <div className="container py-2 py-md-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center align-items-md-end mb-4 flex-wrap">
          <div className="mb-3 mb-md-0">
            <h6 className="text-danger text-uppercase fw-bold m-0 small">Profit Centers</h6>
            <h2 className="fw-bold h1-mobile">
              <span className="text-dark">Key</span> <span className="text-secondary opacity-50">opportunities</span>
            </h2>
          </div>
          <button className="btn btn-outline-danger rounded-pill px-4 btn-sm btn-md-lg">View all plans ↗</button>
        </div>

        {/* Custom Tabs - Added 'overflow-x-auto' for mobile swiping */}
        <div className="border-bottom mb-5">
            <ul className="nav nav-underline flex-nowrap overflow-x-auto pb-1" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {Object.keys(opportunities).map((tab) => (
                <li className="nav-item" key={tab}>
                <button 
                    className={`nav-link fw-bold text-nowrap border-0 bg-transparent ${activeTab === tab ? "active text-danger border-bottom border-danger border-3" : "text-secondary opacity-75"}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                </li>
            ))}
            </ul>
        </div>

        {/* Content Area - Changed to col-12 for mobile and col-lg-6 for desktop */}
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <h3 className="fw-bold mb-3 mb-md-4">{data.title}</h3>
            <p className="text-muted mb-4 mb-md-5">{data.description}</p>
            
            <div className="row mb-4 mb-md-5 g-3">
              <div className="col-6">
                <h2 className="fw-bold text-danger m-0 h2-mobile">{data.val1}</h2>
                <p className="text-uppercase text-muted small fw-bold mb-0">{data.stat1}</p>
              </div>
              <div className="col-6 border-start ps-4 border-danger">
                <h2 className="fw-bold text-dark m-0 h2-mobile">{data.val2}</h2>
                <p className="text-uppercase text-muted small fw-bold mb-0">{data.stat2}</p>
              </div>
            </div>

            <div className="d-grid d-md-block">
                <button className="btn btn-danger btn-lg rounded-pill px-5 shadow-lg scale-hover">
                {data.btnText} ↗
                </button>
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="position-relative overflow-hidden rounded-4 shadow-lg image-container">
              <img 
                src={data.img} 
                className="img-fluid w-100 opportunity-img" 
                alt={activeTab} 
                style={{ height: "300px", minHeight: "300px", objectFit: "cover" }}
              />
              <div className="overlay-badge bg-danger text-white px-3 py-2 fw-bold">
                Trending 🔥
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;