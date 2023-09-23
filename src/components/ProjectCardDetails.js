import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCardDetails({ project, isEven }) {
  return (
    <div className={`project-card ${isEven ? 'even' : 'odd'}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {/* Autres détails du projet ici */}
      </div>
    </div>
  );
}

ProjectCardDetails.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Ajoutez d'autres validations pour les propriétés du projet ici
  }).isRequired,
  isEven: PropTypes.bool.isRequired,
};

export default ProjectCardDetails;
