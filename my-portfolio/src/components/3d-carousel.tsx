import React, { useState } from 'react';
import './carousel.css';

const projects = [
  {
    id: 1,
    title: 'NeuroLens',
    description: 'AI-powered memory assistant with glasses & chatbot.',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'MemoryGraph',
    description: 'Visual Knowledge Graph for personal memories.',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    description: 'Interactive portfolio made with Lightswind UI & Framer Motion.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80',
    github: '#',
    demo: '#',
  },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-heading">🚀 My Featured Projects</h2>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div className="carousel-card" key={project.id}>
              <div
                className={`card-inner ${flipped[index] ? 'flipped' : ''}`}
                onClick={() => handleFlip(index)}
              >
                <div className="carousel-front">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </div>
                <div className="carousel-back">
                  <p>{project.description}</p>
                  <div className="carousel-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="carousel-controls">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`dot ${currentIndex === i ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
