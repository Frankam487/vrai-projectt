import { useState } from "react";
import emailjs from "emailjs-com";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "Bonjour, j'aimerais en savoir plus sur vos services.",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email) {
      setIsLoading(true);
      setIsValid(true);
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
        .then(
          (response) => {
            console.log("Message envoyé avec succès:", response);
            setIsSubmitted(true);
            setIsLoading(false);
            // Redirection vers le client mail avec les informations
            window.location.href = `mailto:contact@beautéparis.com?subject=Message%20de%20${formData.name}&body=${formData.message}%0A%0ANom: ${formData.name}%0AEmail: ${formData.email}`;
          },
          (error) => {
            console.log("Erreur lors de l'envoi:", error);
            setIsLoading(false);
          }
        );
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <header className="text-center text-white mb-12">
        <h1 className="text-5xl font-bold">Contactez-nous</h1>
        <p className="mt-4 text-xl">
          Remplissez vos informations et envoyez-nous un message.
        </p>
      </header>

      {/* Swiper Section with Form */}
      <div className="w-full max-w-2xl">
        <Swiper spaceBetween={50} slidesPerView={1} loop>
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Entrez vos informations
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
                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                {!isValid && (
                  <p className="text-red-500 text-sm">
                    Veuillez remplir tous les champs correctement.
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-4"
                >
                  {isLoading
                    ? "Envoi en cours..."
                    : isSubmitted
                      ? "Message envoyé !"
                      : "Envoyer"}
                </button>
              </form>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Confirmation
              </h2>
              <p className="text-lg text-gray-800">
                Votre message est prêt à être envoyé !
              </p>
              <p className="mt-4 text-lg text-gray-800">
                Nous avons bien reçu vos informations et nous allons vous
                contacter sous peu.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-white py-6 mt-12">
        <p>&copy; 2025 Salon de Beauté. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Contact;
