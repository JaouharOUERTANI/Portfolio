import React from 'react';
import PropTypes from 'prop-types'; 
import './ProjectCard.css';

function ProjectCard({ project, isEven }) {
  return (
    <div className={`project-card ${isEven ? 'even' : 'odd'}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
}

// validation PropTypes pour les propriétés 'project' et 'isEven'
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isEven: PropTypes.bool.isRequired,
};

export default ProjectCard;
