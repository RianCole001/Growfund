import React from "react";
import "./InvestmentJourney.css";
import cryptoImg from "../assets/images/doge.jpg";
import interestImg from "../assets/images/in.jpg";
import realEstateImg from "../assets/images/bed.jpg";

const plans = [
  {
    title: "Crypto Asset Investment",
    img: cryptoImg,
    steps: [
      "Register an account with GrowFund.",
      "Login to your dashboard.",
      "Select 'Crypto Investment' from the investment options.",
      "Choose your desired crypto package and start investing.",
    ],
    cta: "Start Crypto Journey",
    bg: "#fdf5f0",
  },
  {
    title: "Capital Growth / Interest Scheme",
    img: interestImg,
    steps: [
      "Register an account with GrowFund.",
      "Login to your dashboard.",
      "Select 'Money Interest Scheme' from the investment options.",
      "Deposit your amount ($5 minimum) and earn 60% interest over 3 weeks.",
    ],
    cta: "Start Interest Plan",
    bg: "#f0f5fd",
  },
  {
    title: "Real Estate Shares",
    img: realEstateImg,
    steps: [
      "Register an account with GrowFund.",
      "Login to your dashboard.",
      "Select 'Real Estate Investment' from the investment options.",
      "Invest in fractional ownership of high-value properties worldwide.",
    ],
    cta: "Start Real Estate Plan",
    bg: "#f9fdf5",
  },
];

const InvestmentJourney = () => {
  return (
    <section className="investment-journey py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Your Investment Journey</h2>
        <p className="lead mb-5">
          Follow simple steps to start your journey with GrowFund. Choose any plan and start growing your wealth today.
        </p>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div
                className="journey-card p-4 h-100 d-flex flex-column"
                style={{ backgroundColor: plan.bg }}
              >
                <div className="card-image-container mb-3">
                  <img src={plan.img} alt={plan.title} />
                </div>
                <h3 className="fw-bold mb-3">{plan.title}</h3>
                <ol className="step-list mb-4">
                  {plan.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
                <button className="btn btn-primary mt-auto">{plan.cta}</button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted mt-5 small">
          *All investments are subject to market risk. Past performance does not guarantee future results.
        </p>
      </div>
    </section>
  );
};

export default InvestmentJourney;
