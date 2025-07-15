import React, { useState } from 'react';
import heroBg from '../assets/hero-bg.svg';

const Hero = () => {
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
      height: '650px',
      paddingTop: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
    }}>
      {/* Text Content */}
      <div style={{
        zIndex: 1,
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '0 2px 8px #0008',
        marginLeft: '240px',
        maxWidth: '600px'
      }}>
        Mujakath Ali 🌌
        <p style={{
          fontSize: '1rem',
          fontWeight: 'normal',
          marginTop: 16,
          maxWidth: 500,
          lineHeight: '1.7'
        }}>
          Bridging <strong>human memory</strong> and <strong>machine intelligence</strong>, I’m on a mission to craft technology that doesn't just respond — but remembers, reflects, and evolves.
          <br /><br />
          With a passion rooted in AI and a flair for React-driven design, I architect intuitive systems that speak, see, and understand.
          <br /><br />
          I’m not just building apps — I’m building <em>second brains</em>, <em>empathic agents</em>, and tools that make you feel like the future is now.
          <br /><br />
          ⚡ Let’s turn ideas into experiences.
        </p>

        {/* 🔥 Animated Slide Button */}
        <div
          onClick={handleSlideClick}
          style={{
            marginTop: '32px',
            width: '240px',
            height: '52px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #1f1f1f, #2a2a2a)',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Animated Gradient Text */}
          <span
            className="gradient-shimmer-text"
            style={{ paddingLeft: '55px' }}
          >
            Slide to Explore 🚀
          </span>

          {/* Glowing Background Trail */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(270deg, #9f6eff, #00eaff)',
            backgroundSize: '600% 600%',
            animation: 'glowMove 4s ease infinite',
            zIndex: 0,
            opacity: 0.15,
            borderRadius: 'inherit',
          }} />

          {/* Sliding Thumb */}
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#fff',
            position: 'absolute',
            top: '4px',
            left: slid ? '190px' : '4px',
            zIndex: 3,
            transition: 'left 0.4s ease-in-out, background 0.3s ease-in-out',
            boxShadow: '0 4px 10px rgba(255,255,255,0.4)',
          }} />
        </div>
      </div>

      {/* Background Image */}
      <img
        src={heroBg}
        alt="Background"
        style={{
          position: 'absolute',
          top: '88px',
          right: 0,
          width: '590px',
          height: '590px',
          objectFit: 'contain',
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      {/* 🔮 CSS Keyframes */}
      <style>
        {`
          @keyframes glowMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          .gradient-shimmer-text {
            font-size: 0.95rem;
            font-weight: 600;
            padding-left: 20px;
            z-index: 2;
            white-space: nowrap;
            background: linear-gradient(90deg, #9f6eff, #00eaff);
            background-size: 200%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: shimmer 2.5s infinite linear;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
