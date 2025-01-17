import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("Message envoyé avec succès:", response);
          setIsSubmitted(true);
          setIsLoading(false);
        },
        (error) => {
          console.log("Erreur lors de l'envoi:", error);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 font-sans leading-normal tracking-normal overflow-hidden">
      
      <header
        className="text-center py-20 bg-cover bg-center bg-blur-sm"
        style={{
          backgroundImage: 'url("/logo.jpg") center/cover',
        }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-white tracking-wide shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contactez-nous
        </motion.h1>
        <motion.p
          className="text-xl text-white mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Nous sommes prêts à répondre à toutes vos demandes.
        </motion.p>
      </header>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="lg:flex lg:space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Coordonnées */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.h2
              className="text-4xl font-semibold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Nos Coordonnées
            </motion.h2>
            <motion.p
              className="text-gray-200 mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Vous pouvez nous joindre par téléphone, email ou nous rendre
              visite dans notre espace bien-être.
            </motion.p>

            <div className="mt-8 space-y-6">
              {["Adresse", "Téléphone", "Email"].map((label, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-white mt-6 bg-white bg-opacity-10 p-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {label === "Adresse" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10l4-4m0 0l4-4m-4 4h12m-4 4h12"
                      />
                    )}
                    {label === "Téléphone" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l7-7-7-7m5 7H5"
                      />
                    )}
                    {label === "Email" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
                      />
                    )}
                  </svg>
                  <p className="text-gray-100">
                    {label === "Adresse" && "123 Rue de la Beauté, Paris"}
                    {label === "Téléphone" && "(01) 23 45 67 89"}
                    {label === "Email" && "contact@beautéparis.com"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isLoading
                    ? "Envoi en cours..."
                    : isSubmitted
                      ? "Message envoyé !"
                      : "Envoyer"}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 text-white text-center py-6 mt-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          &copy; 2025 Salon de Beauté. Tous droits réservés.
        </motion.p>
      </footer>
    </div>
  );
};

export default Contact;
