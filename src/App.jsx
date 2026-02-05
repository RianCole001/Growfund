import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./components/AboutPage";
import InvestmentPlans from "./components/InvestmentPlans";
import Contact from "./components/Contact"; // make sure filename matches

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plans" element={<InvestmentPlans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
