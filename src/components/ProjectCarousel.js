import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

function ProjectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const renderSlides = () => {
    return projectsData.map((project) => (
      <div key={project.id}>
        <Link to={`/projets/${project.id}`}>
          <ProjectCard project={project} isEven={false} />
        </Link>
      </div>
    ));
  };

  return (
    <Slider {...settings}>
      {renderSlides()}
    </Slider>
  );
}

export default ProjectCarousel;
