import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Certifications.css';
import CertificationCard from '../components/CertificationCard';


function Certifications() {
  return (
    <div className="certifications-container">
      <div className="certification-cards">
        <CertificationCard title="Certification 1" />
        <CertificationCard title="Certification 2" />
        {/* Ajoutez d'autres cartes ici */}
      </div>
      <button className="download-button">Télécharger</button>
    </div>
  );
}

// PropTypes pour CertificationCard
CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Certifications;
