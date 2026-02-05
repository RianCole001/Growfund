import { useEffect, useState } from "react";
import "./AboutHero.css";

// Replace these URLs with your local assets if needed
const slides = [
  {
    title: "Smart Crypto Investments",
    text: "Professionally managed digital assets with data-driven strategies.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040"
  },
  {
    title: "Real Estate Share Ownership",
    text: "Invest in established income-generating properties worldwide.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
  },
  {
    title: "Structured Capital Growth",
    text: "Medium-term investment cycles designed for optimized returns.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938"
  }
];

const AboutHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  const handleInvestClick = () => {
    // You can redirect to your Investment Plans page
    window.location.href = "/plans"; 
  };

  return (
    <section
      className="about-hero d-flex align-items-center"
      style={{ backgroundImage: `url(${slides[index].image})` }}
    >
      <div className="container text-white text-center">
        <h1 className="fw-bold">{slides[index].title}</h1>
        <p className="lead">{slides[index].text}</p>

        <button
          className="btn btn-primary btn-lg mt-4"
          onClick={handleInvestClick}
        >
          Invest Now
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
