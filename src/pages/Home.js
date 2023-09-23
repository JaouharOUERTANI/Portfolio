import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main>
        <section className="hero">
          <h1>Développeur Web Fullstack </h1>
          <p className="hero-text">
            Passionné par le développement web,<br /> j&apos;ai acquis des compétences variées dans le domaine de la programmation.
          </p>
          <p className="hero-text">
            De l&apos;écriture propre de HTML et CSS à la création d&apos;applications interactives avec React,<br /> en passant par la gestion de versions avec Git et Github, je suis prêt à relever de nouveaux défis.
          </p>
        </section>

        <section className="tech-stack">
          <h2>Ma Stack Technologique</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SASS</li>
            <li>Git</li>
            <li>Github</li>
            <li>MongoDB</li>
          </ul>
        </section>

        <section className="about-me">
          <h2>À Propos de Moi</h2>
          <p className="about-me-text">
            Je suis passionné par le développement web et<br /> j&apos;ai acquis des compétences solides dans divers domaines
            technologiques.<br />Mon objectif est de créer des expériences utilisateur exceptionnelles<br /> en utilisant les
            dernières technologies et les meilleures pratiques du secteur.
          </p>
          <p className="about-me-text">
            En tant que développeur, je suis déterminé à résoudre des problèmes complexes,<br /> à apprendre en permanence
            et à collaborer avec des équipes pour créer des solutions innovantes.
          </p>
        </section>
        <Link to="/projets">Voir Mes Projets</Link>
        <ProjectCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
