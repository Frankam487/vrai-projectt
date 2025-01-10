import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importation de l'icône WhatsApp de react-icons

const WhatsAppButton = () => {
  const phoneNumber = "+237690461830"; // Remplacez par votre numéro WhatsApp (avec l'indicatif pays, sans le "+")
  const message = "Bonjour, j'ai une question !"; // Message optionnel à envoyer au contact
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center p-2 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all"
      aria-label="Contacter via WhatsApp"
    >
      <FaWhatsapp className="w-12 h-12" />{" "}
      {/* L'icône WhatsApp avec une taille de 48x48px */}
    </a>
  );
};

export default WhatsAppButton;
