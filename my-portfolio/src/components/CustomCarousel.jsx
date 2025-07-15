import React, { useEffect, useState } from 'react';
import './CustomCarousel.css';

const projects = [
  {
    id: 1,
    title: 'NeuroLens',
    description: 'AI-powered memory assistant with smart glasses and reflective agent.',
    github: 'https://github.com/Mujakathali/NeuroLens',
    live: 'https://neurolens.vercel.app',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
  },
  {
    id: 2,
    title: 'MemoryGraph',
    description: 'Visual Knowledge Graph + Memory Timeline for personal moments.',
    github: 'https://github.com/Mujakathali/MemoryGraph',
    live: 'https://memorygraph.vercel.app',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg',
  },
  {
    id: 3,
    title: 'AI Chatbot',
    description: 'Chatbot using GPT-4 API, built with React & Node.js.',
    github: 'https://github.com/Mujakathali/AI-Chatbot',
    live: '',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80',
  },
  {
    id: 4,
    title: 'Portfolio Site',
    description: 'Interactive portfolio made with Lightswind UI & Framer Motion.',
    github: 'https://github.com/Mujakathali/portfolio',
    live: 'https://mujakathali.vercel.app',
    image: 'https://images.pexels.com/photos/29049/pexels-photo.jpg',
  },
  {
    id: 5,
    title: 'Second Brain Assistant',
    description: 'Voice-enabled intelligent agent storing lifelong memories.',
    github: 'https://github.com/Mujakathali/second-brain',
    live: '',
    image: 'https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg',
  },
];

const CustomCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const openDialog = (project) => {
    setSelected(project);
  };

  const closeDialog = () => {
    setSelected(null);
  };

  const rotateTo = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carousel-wrapper" id="projects">
      <h2 className="carousel-heading">🚀 My Featured Projects</h2>
      <div className="carousel-container">
        <div
          className="carousel-3d"
          style={{
            transform: `translateZ(-300px) rotateY(-${current * (360 / projects.length)}deg)`,
          }}
        >
          {projects.map((project, i) => {
            const angle = (360 / projects.length) * i;
            return (
              <div
                key={project.id}
                className="carousel-card"
                style={{ transform: `rotateY(${angle}deg) translateZ(300px)` }}
                onClick={() => openDialog(project)}
              >
                <div className="carousel-front">
                  <img src={project.image} alt={project.title} />
                  <div className="carousel-content">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="carousel-controls">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => rotateTo(i)}
            />
          ))}
        </div>
      </div>

      {/* Dialog */}
      {selected && (
        <div className="dialog-backdrop" onClick={closeDialog}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <div className="dialog-links">
              {selected.github && (
                <a href={selected.github} target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                  GitHub
                </a>
              )}
              {selected.live && (
                <a href={selected.live} target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="Live Demo" />
                  Live Demo
                </a>
              )}
            </div>
            <button onClick={closeDialog} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
