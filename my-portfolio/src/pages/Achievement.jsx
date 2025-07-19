import React from 'react';
import StarBackground from '../components/Starb';

const achievements = [
 
  {
    description: "Top 1% Rank out of 600 participants in a national-level coding contest at Sri Rama Krishna College of Engineering & Technology.",
    icon: "💻", // Coding related
    year: "2022"
  },
  {
    description: "Runner-Up in Tech Quest (Data Analytics - Designing Dashboard) at PSG College of Technology.",
    icon: "📊", // Analytics related
    year: "2022"
  },
  {
    description: "Winner of ML-Quest Hackathon at Guraisoni College of Engineering, Nagpur. Developed an innovative machine learning solution that outperformed competing teams.",
    icon: "🤖", // AI/ML related
    year: "2023"
  },
];

const Achievement = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      <StarBackground />
      <div style={{
        width: '100%',
        maxWidth: 1200,
        padding: '0 2rem',
        zIndex: 2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        {/* Modern Heading */}
        <h2 style={{
          fontSize: '2.1rem',
          fontWeight: 700,
          margin: 0,
          marginBottom: '1.2rem',
          color: '#fff',
          lineHeight: 1.2,
        }}>
          Achievement is the{' '}
          <span style={{
            background: 'linear-gradient(90deg, #7a5aff 10%, #8f5cff 60%, #ff6b6b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 800,
            letterSpacing: '0.01em',
            display: 'inline-block',
          }}>fusion</span>
          {' '}of vision, code, and relentless iteration.
        </h2>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#fff',
          margin: 0,
          textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
          marginBottom: '2.2rem',
        }}>
          {/* Achievements */}
        </h1>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              style={{
                background: 'transparent',
                borderRadius: '22px',
                minHeight: '210px',
                minWidth: '340px',
                padding: '2.2rem 2rem 2rem 2rem',
                border: '2px solid rgba(120, 90, 255, 0.25)',
                boxShadow: '0 0 18px 2px #7a5aff55, 0 2px 24px 0 #1a1a2e44',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.3s',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #7a5aff, #8f5cff, transparent)',
                filter: 'blur(1.5px)',
                opacity: 0.7,
                animation: 'glow 2s ease-in-out infinite alternate',
              }} />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.2rem',
              }}>
                <span style={{
                  fontSize: '2.2rem',
                  marginRight: '1.1rem',
                }}>
                  {achievement.icon}
                </span>
                <span style={{
                  fontSize: '1.05rem',
                  color: '#8f5cff',
                  fontWeight: '600',
                  letterSpacing: '0.04em',
                }}>{achievement.year}</span>
              </div>
              <p style={{
                color: '#fff',
                lineHeight: 1.7,
                margin: 0,
                fontSize: '1.13rem',
                fontWeight: 500,
                textShadow: '0 1px 8px #1a1a2e55',
              }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
          width: 100%;
        }
        @media (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            justify-items: center;
          }
        }
        @keyframes glow {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Achievement;