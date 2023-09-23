import React from 'react';
import { useParams } from 'react-router-dom'; // Importez useParams pour obtenir l'ID du projet depuis l'URL
import projectsData from '../data/projectsData'; // Importez les données des projets

function ProjectDetails() {
  // Obtenez l'ID du projet à partir de l'URL
  const { id } = useParams();

  // Recherchez le projet correspondant dans les données
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  // Vérifiez si le projet a été trouvé
  if (!project) {
    return <div>Projet non trouvé.</div>;
  }

  // Affichez les détails du projet
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Ajoutez d'autres informations sur le projet ici */}
    </div>
  );
}

export default ProjectDetails;
