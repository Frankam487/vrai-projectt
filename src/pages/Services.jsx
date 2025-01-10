import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Icône pour l'arrow
import "animate.css"; // Pour les animations
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

// Liste des services avec catégories, images, descriptions et prix
const servicesList = [
  {
    id: 1,
    name: "Coupe Homme",
    category: "Coupe",
    description: "Coupe de cheveux classique ou moderne pour hommes.",
    price: "20 CHF",
    imageUrl: "../../public/homme.jpg",
  },
  {
    id: 2,
    name: "Coupe Femme",
    category: "Coupe",
    description: "Coupe de cheveux pour femmes, selon vos envies.",
    price: "30 CHF",
    imageUrl: "../../public/box-classique.jpg",
  },
  {
    id: 3,
    name: "Coloration",
    category: "Coloration",
    description: "Coloration professionnelle, transformation de couleur.",
    price: "50 CHF",
    imageUrl: "../../public/hair-1378218.jpg",
  },
  {
    id: 4,
    name: "Lissage Brésilien",
    category: "Traitements",
    description: "Traitement capillaire pour des cheveux lisses et brillants.",
    price: "150 CHF",
    imageUrl: "../../public/fl.jpg",
  },
  {
    id: 5,
    name: "Balayage",
    category: "Coloration",
    description: "Technique de coloration naturelle pour un effet soleil.",
    price: "80 CHF",
    imageUrl: "../../public/courte.jpg",
  },
  // Ajoutez autant de services que nécessaire...
];

const Services = () => {
  const [filter, setFilter] = useState("All");

  // Filtrer les services en fonction de la catégorie sélectionnée
  const filteredServices =
    filter === "All"
      ? servicesList
      : servicesList.filter((service) => service.category === filter);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-700 mb-4 animate__animated animate__fadeIn">
          Nos Services de Coiffure
        </h1>
        <p className="text-xl text-teal-600 font-medium animate__animated animate__fadeIn">
          Découvrez nos services de coiffure pour hommes, femmes et enfants.
        </p>
      </header>

      {/* Filtre des catégories */}
      <div className="mb-8 flex justify-center gap-4">
        <button
          onClick={() => setFilter("All")}
          className={`px-6 py-3 rounded-lg font-semibold ${filter === "All" ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700"} hover:bg-teal-400 transition-all`}
        >
          Tous
        </button>
        <button
          onClick={() => setFilter("Coupe")}
          className={`px-6 py-3 rounded-lg font-semibold ${filter === "Coupe" ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700"} hover:bg-teal-400 transition-all`}
        >
          Coupes
        </button>
        <button
          onClick={() => setFilter("Coloration")}
          className={`px-6 py-3 rounded-lg font-semibold ${filter === "Coloration" ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700"} hover:bg-teal-400 transition-all`}
        >
          Colorations
        </button>
        <button
          onClick={() => setFilter("Traitements")}
          className={`px-6 py-3 rounded-lg font-semibold ${filter === "Traitements" ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700"} hover:bg-teal-400 transition-all`}
        >
          Traitements
        </button>
      </div>

      {/* Liste des services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-xl hover:scale-105 transform transition-all p-6 animate__animated animate__fadeIn"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-teal-600">
              {service.name}
            </h2>
            <p className="text-md text-teal-500 mb-4">{service.description}</p>
            <p className="text-xl font-semibold text-teal-700">
              {service.price}
            </p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all">
              <NavLink
                to="/reserver"
                className="decoration-none mt-4 p-1 rounded-lg no-underline text-white font-semibold hover:bg-teal-700 transition-all w-full"
              >
                Reserver Maintenant
              </NavLink>{" "}
              <FaArrowRight className="inline ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      {/* <footer className="w-full bg-teal-800 text-white py-6 ">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-xl mb-4">Salon de Coiffure</p>
          <p className="text-md mb-2">📍 Adresse : 6423 Schwyz</p>
          <p className="text-md mb-2">📞 Téléphone : 0000000000</p>
          <p className="text-md mb-2">✉️ Email : mfokamkemgne@icloud.com</p>
          <p className="text-sm">
            Heures d'ouverture : 9h - 19h, Lundi au Vendredi
          </p>
          <p className="text-sm mt-4">
            © 2025 Salon de Coiffure. Tous droits réservés.
          </p>
        </div>
      </footer> */}
      <Footer/>
    </div>
  );
};

export default Services;