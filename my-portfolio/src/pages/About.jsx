import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import mujaImg from '../assets/muja.png';
import StarBackground from '../components/Starb';

const About = () => {
  const [showImg, setShowImg] = useState(false);
  const [showMujakath, setShowMujakath] = useState(false);
  const [showAli, setShowAli] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();

  const handleSlideClick = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const introText = `Hey there! I’m Mujakath Ali — a frontend developer and ML enthusiast who loves blending intelligence with interface.\n\nWith a passion for crafting beautiful, responsive UIs and a curiosity for AI, I bring both logic and creativity to every project. From building smooth, animated web experiences to experimenting with Generative AI, I enjoy pushing the boundaries of what’s possible on the web.\n\nWhether it's React, Tailwind, Framer Motion, or fine-tuning an AI model, I love turning ideas into intuitive digital products. I believe design is not just how it looks — it’s how it feels.\n\nLet’s create something extraordinary.`;
  const [typedWords, setTypedWords] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImg(true);
          setShowMujakath(true);
          setShowAli(true);
          setShowSkills(true);
        } else {
          setShowImg(false);
          setShowMujakath(false);
          setShowAli(false);
          setShowSkills(false);
        }
      },
      { threshold: 0.5 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    if (showMujakath) {
      setTyping(true);
    } else {
      setTyping(false);
      setTypedWords([]);
    }
  }, [showMujakath]);

  useEffect(() => {
    if (!typing) return;
    const words = introText.split(/\s+/);
    let i = 0;
    const interval = setInterval(() => {
      setTypedWords((prev) => [...prev, words[i]]);
      i++;
      if (i >= words.length) clearInterval(interval);
    }, 80); // Adjust speed here
    return () => clearInterval(interval);
  }, [typing]);

  return (
    <div
      ref={aboutRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '650px',
        paddingTop: '98px',
        paddingBottom: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      <StarBackground />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          paddingBottom: '370px',
        }}
      >
        {/* Logo and menu */}
        <div style={{
          position: 'absolute',
          top: 32,
          left: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          pointerEvents: 'auto',
        }}>


        </div>
        <div style={{
          position: 'absolute',
          top: 32,
          right: 32,
          pointerEvents: 'auto',
        }}>
          {/* Hamburger menu removed as requested */}
        </div>
        {/* Tagline */}
        <div style={{
          background: 'rgba(30,30,30,0.7)',
          color: '#fff',
          borderRadius: 24,
          padding: '8px 28px',
          fontWeight: 500,
          fontSize: 16,
          marginBottom: 24,
          letterSpacing: 2,
          pointerEvents: 'auto',
        }}>
          — Pixels speak more than words —
        </div>
        {/* Name and photo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          pointerEvents: 'auto',
        }}>
          {/* Animated name left/right */}
          <span
            className={`about-hero-name about-hero-mujakath${showMujakath ? ' slide-in-left' : ''}`}
            style={{
              position: 'absolute',
              left: 0,
              top: '10%',
              fontSize: 'clamp(2rem, 10vw, 6rem)',
              fontWeight: 500,
              color: '#fff',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              zIndex: 2,
              textShadow: '0 0 60px #ff3c3c99',
              paddingLeft: 140,
              paddingTop: 0,
            }}
          >
            Mujakath Ali M
          </span>

        </div>
      </div>
      <div
        className="about-hero-typewriter-fixed"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          zIndex: 1000,
          width: '100vw',
          pointerEvents: 'none',
          display: typedWords.length > 0 ? 'block' : 'none',
        }}
      >
        <span className="about-hero-typewriter-word">{typedWords[typedWords.length - 1]}</span>
      </div>
      {/* Animated profile image at bottom center */}
      <img
        src={mujaImg}
        alt="Mujakath ali"
        className={`about-hero-profile-img${showImg ? ' pop-up' : ''}`}
        style={{
          position: 'absolute',
          right: '-200px',
          bottom: -10,
          transform: 'translateX(0)',
          width: 420,
          height: 550,
          zIndex: 4,
        }}
      />
      {/* Skills/tags */}
      <div className={`about-skillset${showSkills ? ' slide-in-right' : ''}`} style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 48,
        marginTop: -90,
        marginLeft: 90,
        pointerEvents: 'auto',
        width: '100%',
        maxWidth: '600px',
      }}>
        <span style={{ color: '#fff', fontWeight: 500, fontSize: 18, opacity: 0.8 }}>ML-Engineer</span>
        <span style={{ color: '#fff', fontWeight: 500, fontSize: 18, opacity: 0.8 }}>Front-end Developer</span>
        <span style={{ color: '#fff', fontWeight: 500, fontSize: 18, opacity: 0.8 }}>Problem solver</span>
        <span style={{ color: '#fff', fontWeight: 500, fontSize: 18, opacity: 0.8 }}>Tech with Empathy</span>
      </div>

      <style>{`
        @keyframes popUpFromBottom {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .pop-up {
          animation: popUpFromBottom 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @media (max-width: 1025px) {
          .about-hero-profile-img {
            position: static !important;
            display: block !important;
            margin: 242px -432px 0 auto !important;
            
            width: 220px !important;
            height: 290px !important;
            right: unset !important;
            left: 20px !important;
            bottom: unset !important;
            transform: none !important;
            z-index: 4;
          }
          .about-skillset {
            justify-content: center !important;
            align-items: center !important;
            margin-left: 0 !important;
            gap: 24px !important;
            flex-wrap: wrap !important;
            max-width: 600px !important;
            width: 100% !important;
            margin-right:180px;
          }
        }
        @media (max-width: 600px) {
          .about-skillset {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            max-width: 98vw !important;
            margin-right: 0 !important;
            gap: 8px !important;
            margin-bottom: 200px;
            padding-left: 60px;
          }
          .about-skillset span {
            font-size: 13px !important;
          }
          .about-hero-profile-img {
            position: static !important;
            display: block !important;
            margin: 242px -332px 0 auto !important;
            width: 400px !important;
            height: 450px !important;
            right: unset !important;
            left: 20px !important;
            bottom: unset !important;
            transform: none !important;
            z-index: 4;
          }
        }
        @media (max-width: 400px) {
        .about-hero-profile-img {
            position: static !important;
            display: block !important;
            margin: 190px -312px 0 auto !important;
            
            width: 350px !important;
            height: 450px !important;
            right: unset !important;
            left: 20px !important;
            bottom: unset !important;
            transform: none !important;
            z-index: 4;
          }
          .about-skillset {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            max-width: 98vw !important;
            margin-right: 0 !important;
            gap: 8px !important;
            margin-bottom:210px;
            padding-right:90px;
          }
          .about-skillset span {
            font-size: 13px !important;
          }
        }
        .about-hero-name {
          max-width: 90vw;
          overflow-wrap: break-word;
          display: block;
        }
        @media (max-width: 600px) {
          .about-hero-name {
            max-width: 95vw;
            padding-left: 0 !important;
            font-size: 2.2rem !important;
            text-align: center !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 auto !important;
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
