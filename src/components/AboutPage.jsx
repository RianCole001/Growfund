// AboutPage.jsx
import React from "react";
import AboutHero from "./AboutHero";
import AboutCompany from "./AboutCompany";
import InvestmentPlans from "./InvestmentPlanss";


const AboutPage = () => {
  return (
    <>
      {/* Hero at the top */}
      <AboutHero />

      {/* Sections that follow the hero */}
      <AboutCompany />
      <InvestmentPlans />
      
    </>
  );
};

export default AboutPage;
