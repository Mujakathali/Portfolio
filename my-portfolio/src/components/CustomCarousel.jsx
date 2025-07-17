import React, { useEffect, useState } from 'react';
import p1 from '../assets/proj1.png';
import p2 from '../assets/proj2.webp';
import p3 from '../assets/proj3.svg';
import p4 from '../assets/proj4.webp';
import './CustomCarousel.css';

const projects = [
    {
        id: 1,
        title: 'Emotion Detection',
        description: 'Emotion Detection AI using CNNs: Developed a real-time emotion recognition system using deep learning with MobileNetV2 and InceptionV3 for accurate facial emotion classification. Enables impactful use in mental health, surveillance, and interactive AI systems.',
        github: 'https://github.com/Mujakathali/DLV-Project',
        image: p1
    },
    {
        id: 2,
        title: 'Help-Desk Chatbot(EdVora)',
        description: 'College Helpdesk Chatbot (Jan 2025 – Mar 2025): Built an AI chatbot using LLaMA 2 7B, React.js, and Flask to instantly answer college-related queries. Streamlined access to course details, schedules, and campus info through a user-friendly chat interface.',
        github: 'https://github.com/Mujakathali/ChatBot-EdVora',
        image: p2
    },
    {
        id: 3,
        title: 'Task Management System',
        description: 'Task Management System – STINT (May 2024 – Jul 2024): Designed a task allocation and tracking system using React, Spring Boot, and SQL Workbench to enhance staff productivity. Delivered an intuitive interface for seamless coordination tailored to institutional workflows.',
        github: 'https://github.com/Mujakathali/Ski-Stint',
        live: 'https://ski-stint-adminpage.netlify.app/',
        image: p3
    },
    {
        id: 4,
        title: 'Lunar Crater Image Enhancement',
        description: 'Lunar Crater Image Enhancement (Feb 2023 – May 2023): Developed a deep learning pipeline using GANs and OpenCV to enhance PSR region images of lunar craters. Improved SNR for better visibility, aiding geomorphological analysis and lunar mission planning.',
        github: 'https://github.com/Mujakathali/portfolio',
        image: p4
    },
    {
        id: 5,
        title: 'Second Brain Assistant',
        description: 'Voice-enabled intelligent agent storing lifelong memories.(SOONER)',
        live: '',
        image: 'https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg'
    }
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
        <div className="carousel-wrapper" id="projects" style={{ paddingTop: '100px' }}>
            <h2 className="carousel-heading">🚀 My <span className="gradient-word">Featured</span> Projects</h2>
            <div
                className="carousel-container"
              
            >
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
