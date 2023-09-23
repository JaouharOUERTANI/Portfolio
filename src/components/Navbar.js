import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importez les styles spécifiques à la barre de navigation

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className="navbar">
      <div className="desktop-nav">
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
      </div>
      <div className={`mobile-nav ${isNavVisible ? 'visible' : 'hidden'}`}>
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
      </div>
      <button className="toggle-nav-button" onClick={toggleNav}>
        <i className={`fas fa-${isNavVisible ? 'times' : 'bars'}`} />
      </button>
    </nav>
  );
}

export default Navbar;
