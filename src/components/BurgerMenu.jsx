import React from 'react';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  return (

     <>
 <nav className="hidden lg:flex  space-x-8">
          <NavLink
            to="/"
            className="hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-4 py-2 rounded-lg">
            Acceuil
          </NavLink>

          <NavLink
            to="/services"
            className="hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-4 py-2 rounded-lg">
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-4 py-2 rounded-lg">
            Contact
          </NavLink>
        </nav>
      </div>

      <div
        className={`lg:hidden bg-gray-800 bg-opacity-80 fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}>
        <div className="flex flex-col items-center justify-center space-y-6 mt-24">
          <NavLink
            to="/"
            className="text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-6 py-2 rounded-lg">
            Home
          </NavLink>

          <NavLink
            to="/services"
            className="text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-6 py-2 rounded-lg">
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-300 px-6 py-2 rounded-lg">
            Contact
          </NavLink>
        </div>

     </>

  );
};

export default BurgerMenu;