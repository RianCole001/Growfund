import "./InvestmentPlanss.css";

import cryptoBg from "../assets/images/doge.jpg";
import growthBg from "../assets/images/in.jpg";
import realEstateBg from "../assets/images/bed.jpg";

const plans = [
  {
    title: "Crypto Asset Investment",
    desc: "Access professionally managed cryptocurrency portfolios with expert market analysis, strategic entry points, and active volatility control for high-potential returns.",
    bg: cryptoBg,
    color: "#ffd700" // gold accent
  },
  {
    title: "Capital Growth Plan",
    desc: "Structured medium-term investment cycles designed to optimize returns while maintaining risk transparency and predictable growth.",
    bg: growthBg,
    color: "#00ffff" // cyan accent
  },
  {
    title: "Real Estate Shares",
    desc: "Invest in fractional ownership of income-generating properties, earning rental income and long-term appreciation without the complexities of direct property management.",
    bg: realEstateBg,
    color: "#ff7f50" // coral accent
  }
];

const InvestmentPlanss = () => {
  return (
    <section className="investment-plans py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Our Investment Solutions</h2>
        <p className="lead text-muted mb-5">
          Choose from our curated investment strategies designed for growth, income, and long-term wealth.
        </p>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div
                className="plan-card p-4 h-100 d-flex flex-column shadow-sm"
                style={{
                  backgroundImage: `url(${plan.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Gradient overlay for readability */}
                <div className="card-overlay"></div>

                <h3 className="plan-title mb-3" style={{ color: plan.color }}>
                  {plan.title}
                </h3>
                <p className="plan-desc flex-grow-1">{plan.desc}</p>
                <button className="btn btn-primary mt-3">Invest Now</button>
              </div>
            </div>
          ))}
        </div>

        <small className="d-block text-muted mt-4">
          *Investment returns are market-dependent and subject to risk.
        </small>
      </div>
    </section>
  );
};

export default InvestmentPlanss;
