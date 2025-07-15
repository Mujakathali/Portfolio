import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import StarBackground from '../components/Starb';

const Projects = () => (
  <section id="projects">
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '700px',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <CustomCarousel />
      <StarBackground />
    </div>
  </section>
);
export default Projects;
