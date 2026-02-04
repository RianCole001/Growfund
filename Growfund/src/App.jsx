import { useEffect, useState } from "react";
import Loader from "./assets/loader"; 
import Header from "./components/Header"; 
import Hero from "./components/Hero"; // ✅ Import Hero component
import "./assets/loader.css"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import image1 from "./assets/images/image1.jpg";
import image4 from "./assets/images/image4.jpg";
import image3 from "./assets/images/image3.jpg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WhyInvest from "./components/WhyInvest";
import InvestmentOpportunities from "./components/InvestmentOpportunities";
import InvestmentGuide from "./components/InvestmentGuide";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(init);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
      <Header /> 

      {/* Hero Section */}
      <Hero
  title="Welcome to Grow fund, Invest in Growfund"
  subtitle="Unlock new opportunities and grow your business in a thriving new market. Explore with other investors, Traders, and support for your venture."
  buttonText="Get Started"
  buttonLink="#explore"
  images={[
    {
      src: image3,
      alt: "Investment opportunity 1",
      caption: "Explore new investment opportunities",
    },
    {
      src: image1,
      alt: "Investment opportunity 2",
      caption: "Invest with the experts",
    },
    {
      src: image4,
      alt: "Investment opportunity 3",
      caption: "Unlock economic potential",
    },
  ]}
/>
<WhyInvest/>
<InvestmentOpportunities/>
<InvestmentGuide />
      {/* Future components will go here, e.g., Sector Cards, Testimonials */}
    </div>
  );
}

export default App;
