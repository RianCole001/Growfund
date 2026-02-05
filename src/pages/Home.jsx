import React from "react";
import Hero from "../components/Hero";
import WhyInvest from "../components/WhyInvest";
import InvestmentOpportunities from "../components/InvestmentOpportunities";
import InvestmentGuide from "../components/InvestmentGuide";

import image1 from "../assets/images/image1.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

const Home = () => {
  return (
    <div className="app-container">
      <Hero
        title="Welcome to Grow fund, Invest in Growfund"
        subtitle="Unlock new opportunities and grow your business in a thriving new market. Explore with other investors, Traders, and support for your venture."
        buttonText="Get Started"
        buttonLink="/journey"
        images={[
          { src: image3, alt: "Investment opportunity 1", caption: "Explore new investment opportunities" },
          { src: image1, alt: "Investment opportunity 2", caption: "Invest with the experts" },
          { src: image4, alt: "Investment opportunity 3", caption: "Unlock economic potential" },
        ]}
      />

      <WhyInvest />
      <InvestmentOpportunities />
      <InvestmentGuide />
    </div>
  );
};

export default Home;
