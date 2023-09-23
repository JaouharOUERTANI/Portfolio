import React from 'react';
import projectsData from '../data/projectsData';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projets</h1>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <Link to={`/projets/${project.id}`} key={project.id}>
            <div className={`project-card-details ${index % 2 === 0 ? 'even' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
