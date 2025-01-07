import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';

const generateDatesForMonth = (month, year) => {
  const dates = [];
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  while (startDate <= endDate) {
    const dateObj = new Date(startDate);
    for (let hour = 8; hour < 12; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeSlot = new Date(dateObj.setHours(hour, minute, 0, 0));
        dates.push(timeSlot);
      }
    }
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
};

const Reserver = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const availableDates = generateDatesForMonth(11, 2024);
  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleEmailRedirection = () => {
    if (selectedDate) {
      const subject = `Réservation Salon de Coiffure - ${selectedDate.toLocaleDateString()}`;
      const body = `Bonjour, je souhaite réserver pour la date suivante : ${selectedDate.toLocaleDateString()} à ${selectedDate.toLocaleTimeString()}.`;
      window.location.href = `mailto:contact@saloncoiffure.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      alert('Veuillez sélectionner une date avant de réserver.');
    }
  };

  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1.5,
    focusOnSelect: true,
    arrows: true,
    nextArrow: (
      <div className="slick-arrow slick-next">
        <span className="text-teal-600 text-xl p-4 rounded-full bg-white shadow-2xl hover:bg-teal-100 transition-all">
          ➡️
        </span>
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev">
        <span className="text-teal-600 text-xl p-4 rounded-full bg-white shadow-2xl hover:bg-teal-100 transition-all">
          ⬅️
        </span>
      </div>
    ),
  };


  const formatDay = (date) => {
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 p-6 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-700 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Réservez votre Rendez-vous au Salon de Coiffure
        </h1>
        <p className="text-xl text-teal-600 font-medium animate__animated animate__fadeIn animate__delay-1s">
          Choisissez la date et l'heure qui vous conviennent et réservez en
          ligne facilement.
        </p>
      </header>

      {/* Carrousel de dates */}
      <Slider {...settings} className="w-full max-w-full mb-12">
        {availableDates.map((date, index) => (
          <div key={index} className="flex justify-center">
            <div
              onClick={() => handleDateSelection(date)}
              className={`cursor-pointer p-8 md:p-10 lg:p-12 w-full max-w-xs lg:max-w-sm bg-gradient-to-r
                ${selectedDate && selectedDate.getTime() === date.getTime() ? 'from-teal-500 to-teal-700 text-white' : 'from-gray-300 to-gray-500 text-gray-700'}
                rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-lg hover:opacity-90 text-center
                flex flex-col justify-center items-center animate__animated animate__bounceIn`}
              role="button"
              aria-label={`Sélectionner la date ${date.toLocaleDateString()}`}>
              <p className="text-lg md:text-xl font-semibold">
                {formatDay(date)} {/* Affiche le jour de la semaine */}
              </p>
              <p className="text-md md:text-lg font-semibold">
                {date.toLocaleDateString()} {/* Affiche la date */}
              </p>
              <p className="text-sm md:text-md mt-2">
                {formatTime(date)} {/* Affiche l'heure sélectionnée */}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Bouton de redirection vers l'email */}
      <div className="mt-8 animate__animated animate__fadeIn animate__delay-2s">
        <button
          onClick={handleEmailRedirection}
          className={`px-8 py-4 text-white font-semibold rounded-lg shadow-lg
            ${selectedDate ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105' : 'bg-gray-400 cursor-not-allowed'}
            transform transition-all`}
          disabled={!selectedDate}
          aria-disabled={!selectedDate}>
          Réserver par email
        </button>
      </div>

      {/* Message de confirmation si une date est sélectionnée */}
      {selectedDate && (
        <div className="mt-6 text-center text-xl font-semibold text-teal-600 animate__animated animate__fadeIn animate__delay-3s">
          <p>
            Vous avez sélectionné le {selectedDate.toLocaleDateString()} à{' '}
            {selectedDate.toLocaleTimeString()}.
          </p>
        </div>
      )}

      {/* Footer avec informations supplémentaires */}
      <footer className="w-full bg-teal-800 text-white py-6 mt-12">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-xl mb-4">Salon de Coiffure</p>
          <p className="text-md mb-2">📍 Adresse : 123 Rue</p>
          <p className="text-md mb-2">📞 Téléphone : 01 23 45 67 89</p>
          <p className="text-md mb-2">✉️ Email : contact@saloncoiffure.com</p>
          <p className="text-sm">
            Heures d'ouverture : 9h - 19h, Lundi au Vendredi
          </p>
          <p className="text-sm mt-4">
            © 2024 Salon de Coiffure. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Reserver;
