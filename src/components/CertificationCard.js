import React from 'react';
import PropTypes from 'prop-types';

function CertificationCard({ title }) {
  return (
    <div className="certification-card">
      <h3>{title}</h3>      
    </div>
  );
}

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CertificationCard;
