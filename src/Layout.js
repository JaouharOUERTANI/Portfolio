import React from 'react';
import PropTypes from 'prop-types'; // Importez PropTypes depuis prop-types
import Header from './components/Header';
import BackToTopButton from './components/BackToTopButton';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <BackToTopButton />
    </div>
  );
}

// Ajoutez la validation PropTypes pour la propriété 'children'
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Utilisez 'node' pour accepter n'importe quel type de composant React
};

export default Layout;
