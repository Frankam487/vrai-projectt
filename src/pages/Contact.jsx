import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Création du lien mailto avec les informations remplies
    const emailTo = "contact@housebeauty.com"; // L'adresse email du destinataire
    const subject = encodeURIComponent("Message depuis le site Web"); // Sujet de l'email
    const body = encodeURIComponent(`
      Nom: ${name}
      Message: ${message}
    `); // Corps de l'email avec les informations de l'utilisateur

    // Générer le lien mailto
    const mailtoLink = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Ouvrir le client de messagerie avec le lien mailto
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-teal-800 text-center mb-6">
          Contactez-Nous
        </h2>

        {/* Section des inputs */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg text-teal-600">
              Votre Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-lg text-teal-600">
              Votre Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Dites-nous ce que vous avez en tête"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-teal-600 text-white px-8 py-2 rounded-lg hover:bg-teal-700 transition duration-300 ease-in-out"
            >
              Envoyer
            </button>
          </div>
        </form>

        {/* Section des informations de contact */}
        <div className="mt-12 space-y-8">
          <h3 className="text-2xl font-semibold text-teal-800">
            Nos Coordonnées
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-teal-600 text-2xl" />
              <span className="text-xl text-gray-700">+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-teal-600 text-2xl" />
              <span className="text-xl text-gray-700">
                contact@housebeauty.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-teal-600 text-2xl" />
              <span className="text-xl text-gray-700">
                123 Rue de la Beauté, Paris, France
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
