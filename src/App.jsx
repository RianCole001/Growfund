import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InvestmentPlans from "./components/InvestmentPlans";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<InvestmentPlans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
