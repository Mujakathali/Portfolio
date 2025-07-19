import React, { useEffect, useRef, useState } from 'react';
import heroBg from '../assets/hero-bg.svg';
import StarBackground from '../components/Starb';

const Hero = () => {
  const [sliderX, setSliderX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Drag logic for slider
  const SLIDER_WIDTH = 240 - 44 - 8; // button width - thumb width - padding

  const handleDragStart = (e) => {
    setDragging(true);
    e.preventDefault();
  };

  const handleDrag = (e) => {
    if (!dragging) return;
    let clientX;
    if (e.type.startsWith('touch')) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const sliderRect = sliderRef.current.getBoundingClientRect();
    let x = clientX - sliderRect.left - 22; // 22 = thumb radius
    x = Math.max(0, Math.min(x, SLIDER_WIDTH));
    setSliderX(x);
  };

  const handleDragEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (sliderX > SLIDER_WIDTH * 0.85) {
      // Trigger scroll
      const target = document.getElementById('about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setSliderX(0);
    } else {
      setSliderX(0);
    }
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('touchmove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    } else {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [dragging, sliderX]);

  return (
    <div id="hero" style={{
      position: 'relative',
      width: '100%',
      minHeight: '650px',
      paddingTop: '100px',
      marginTop: '30px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      overflow: 'hidden',
    }}>
      <StarBackground />

      {/* TEXT SECTION */}
      <div
        style={{
          zIndex: 1,
          color: 'white',
          fontSize: '2.8rem',
          fontWeight: 'bold',
          textShadow: '0 2px 8px #0008',
          maxWidth: '700px',
          flex: '1 1 300px',
          padding: '110px 3rem 0 4.5rem',
        }}
      >
        {/* Badge */}
        <div className={`hero-badge animated-badge${isVisible ? ' show' : ''}`}>✨Machine Learning Engineer</div>
        {/* Heading */}
        <div className={`animated-heading${isVisible ? ' show' : ''}`} style={{
          marginTop: '1.2rem',
          fontSize: '2.3rem',
          fontWeight: 'bold',
          lineHeight: '1.2'
        }}>
          <span className="gradient-word">Hey</span><br />
          I am <span className="gradient-word">Mujakath</span>
        </div>
        {/* Paragraph */}
        <p className={`animated-paragraph${isVisible ? ' show' : ''}`} style={{
          fontSize: '1.1rem',
          fontWeight: 'normal',
          marginTop: 20,
          maxWidth: 540,
          lineHeight: '1.8'
        }}>
          Empowering Ideas Through Code & Intelligence.⚡ Let’s turn ideas into experiences.
        </p>
        {/* SLIDE BUTTON */}
        <div
          className={`slide-button animated-button${isVisible ? ' show' : ''}`}
          ref={sliderRef}
          style={{
            marginTop: '32px',
            width: '240px',
            height: '52px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #1f1f1f, #2a2a2a)',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            cursor: dragging ? 'grabbing' : 'pointer',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            userSelect: 'none',
          }}
        >
          <span
            className="gradient-shimmer-text"
            style={{ paddingLeft: '55px', pointerEvents: 'none' }}
          >
            Slide to Explore 🚀
          </span>

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

          <div
            ref={thumbRef}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#fff',
              position: 'absolute',
              top: '4px',
              left: `${4 + sliderX}px`,
              zIndex: 3,
              transition: dragging ? 'none' : 'left 0.4s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: '0 4px 10px rgba(255,255,255,0.4)',
              touchAction: 'none',
              cursor: dragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          />
        </div>
      </div>

      {/* IMAGE SECTION */}
      <img
        src={heroBg}
        alt="Background"
        className={`animated-image${isVisible ? ' show' : ''}`}
        style={{
          width: '600px',
          height: '600px',
          objectFit: 'contain',
          opacity: 0.8,
          zIndex: 0,
          flex: '1 1 280px',
          top: '30px',
          padding: '0 2rem',
        }}
      />

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes glowMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
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

          .hero-badge {
            display: inline-block;
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
            border: 1.5px solid #a78bfa;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 9999px;
            color: white;
            margin-bottom: 2rem;
            font-weight: 500;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 8px 0 #a78bfa44;
          }

          .gradient-word {
            background: linear-gradient(to right, #c084fc, #60a5fa, #22d3ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
          }

          .hero-hidden {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
          }
          .hero-visible {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
          }

          /* Staggered entrance animations */
          .animated-badge {
            opacity: 0;
            transform: translateY(-40px);
            transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1);
            transition-delay: 0.05s;
          }
          .animated-badge.show {
            opacity: 1;
            transform: translateY(0);
          }
          .animated-heading {
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1);
            transition-delay: 0.15s;
          }
          .animated-heading.show {
            opacity: 1;
            transform: translateX(0);
          }
          .animated-paragraph {
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1);
            transition-delay: 0.28s;
          }
          .animated-paragraph.show {
            opacity: 1;
            transform: translateX(0);
          }
          .animated-button {
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1);
            transition-delay: 0.38s;
          }
          .animated-button.show {
            opacity: 1;
            transform: translateX(0);
          }
          .animated-image {
            opacity: 0 !important;
            transform: translateX(200px) !important;
            transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
            transition-delay: 0.48s;
          }
          .animated-image.show {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }

          @media (max-width: 1200px) and (min-width: 769px) {
            #hero {
              flex-wrap: nowrap !important;
              justify-content: space-around !important;
              padding-top: 80px !important;
            }

            #hero > div {
              padding: 2rem !important;
            }

            #hero img {
              width: 480px !important;
              height: auto !important;
            }
          }

          @media (max-width: 768px) {
            #hero {
              flex-direction: column;
              text-align: center;
              bottom: 120px;
            }

            #hero img {
              width: 360px !important;
              height: auto !important;
              margin-top: 1.5rem;
            }

            #hero > div {
              margin: 0 auto !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }

            .slide-button {
              margin: 48px auto 0 auto !important;
            }

            .gradient-shimmer-text {
              font-size: 0.85rem;
            }

            .hero-badge {
              font-size: 0.8rem;
            }
          }

          @media (max-width: 480px) {
            #hero {
              bottom: 120px;
            }

            .hero-badge {
              font-size: 0.75rem;
            }

            .gradient-word {
              font-size: 2rem;
            }

            #hero p {
              font-size: 0.95rem;
            }

            #hero img {
              width: 450px !important;
            }

            .slide-button {
              width: 200px !important;
              height: 46px !important;
              top:3px;
            }

            .slide-button .gradient-shimmer-text {
              font-size: 0.8rem !important;
              padding-left: 60px !important;
            }

            .slide-button .slider-thumb {
              width: 40px !important;
              height: 40px !important;
              top: 3px !important;
              left: 3px !important;
            
            }
          }

          @media (min-width: 1400px) {
            #hero {
              padding-top: 20px !important;
              align-items: flex-start !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
