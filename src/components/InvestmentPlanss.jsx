const plans = [
  {
    title: "Crypto Asset Investment",
    desc: "Professionally managed cryptocurrency portfolios using market analysis, volatility control, and strategic entry points."
  },
  {
    title: "Capital Growth Plan",
    desc: "A structured investment plan designed for medium-term growth cycles, targeting optimized returns over a defined period."
  },
  {
    title: "Real Estate Shares",
    desc: "Invest in shares of already established, income-generating properties without the complexity of property ownership."
  }
];

const InvestmentPlanss = () => {
  return (
    <div className="investment-plans container">
      <h2>Our Investment Solutions</h2>

      <div className="plan-grid">
        {plans.map((plan, i) => (
          <div key={i} className="plan-card">
            <h3>{plan.title}</h3>
            <p>{plan.desc}</p>
          </div>
        ))}
      </div>

      <small className="disclaimer">
        *Investment returns are market-dependent and subject to risk.
      </small>
    </div>
  );
};

export default InvestmentPlanss;
