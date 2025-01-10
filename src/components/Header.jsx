import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-500 via-teal-500 to-gray-500 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <span className="text-4xl font-extrabold">House</span>Beauty
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="lg:hidden p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu mobile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu (Desktop) */}
        <nav className="hidden lg:flex space-x-8">
          <NavLink
            to="/"
            className="hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-4 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            Acceuil
          </NavLink>
          <NavLink
            to="/about"
            className="hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-4 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-4 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-4 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-800 bg-opacity-80 fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-center space-y-6 mt-24">
          <NavLink
            to="/"
            className="text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-6 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-6 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-6 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-6 py-2 rounded-lg"
            activeClassName="text-yellow-300"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
