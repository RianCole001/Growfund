import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import AboutPage from "./components/AboutPage";
import InvestmentPlans from "./components/InvestmentPlans";
import Contact from "./components/Contact"; // make sure filename matches
import InvestmentJourney from "./components/InvestmentJourney";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Header />
<ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plans" element={<InvestmentPlans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<InvestmentJourney />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
