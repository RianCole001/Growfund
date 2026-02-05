import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+15551234567"; // replace with your number
  const message = "Hello! I would like to know more about GrowFund.";

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp fa-2x"></i>
    </a>
  );
};

export default WhatsAppButton;
