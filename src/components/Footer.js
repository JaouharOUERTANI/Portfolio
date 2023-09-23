import React from 'react';
import './Footer.css'; // Importez les styles spécifiques au pied de page

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/votre-page-facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/votre-page-instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/votre-profil-linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/votre-profil-github" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="credit-text">
        Réalisé par [Votre Nom]
      </div>
    </footer>
  );
}

export default Footer;
