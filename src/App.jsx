import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutCompany from "./components/AboutCompany";
import InvestmentPlans from "./components/InvestmentPlans";
import AboutHero from "./components/AboutHero";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plans" element={<InvestmentPlans />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
