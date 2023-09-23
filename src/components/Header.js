import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importez les styles spécifiques à l'en-tête

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Votre Logo</Link>
      </div>
      <button className="toggle-nav-button" onClick={toggleNav}>
        {isNavVisible ? 'Cacher' : 'Afficher'} la navigation
      </button>
      <nav className={`nav ${isNavVisible ? 'visible' : 'hidden'}`}>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <Link to="/certifications">Certifications</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
