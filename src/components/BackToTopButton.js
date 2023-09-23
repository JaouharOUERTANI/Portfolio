import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Ajoutez un gestionnaire d'événements pour surveiller le défilement de la page
    window.addEventListener('scroll', handleScroll);

    // Retirez le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour gérer le défilement et l'affichage de la flèche
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      // Affichez la flèche lorsque vous faites défiler vers le bas
      setShowBackToTop(true);
    } else {
      // Masquez la flèche lorsque vous êtes près du haut de la page
      setShowBackToTop(false);
    }
  };

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`back-to-top ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop}>
      ↑
    </div>
  );
}

export default BackToTopButton;
