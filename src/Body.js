import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';

function Body({ children }) {
  return (
    <div className="body">
      {children}
    </div>
  );
}

// Validez la propriété 'children' avec PropTypes
Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
