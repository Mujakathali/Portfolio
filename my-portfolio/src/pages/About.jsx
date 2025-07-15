import React, { useState } from 'react';
import heroBg from '../assets/hero-bg.svg';

const About = () => {
  const [slid, setSlid] = useState(false);

  const handleSlideClick = () => {
    setSlid(true);
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => setSlid(false), 1000);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '640px',
      paddingTop: '98px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
    }}>

    </div>
  );
};

export default About;
