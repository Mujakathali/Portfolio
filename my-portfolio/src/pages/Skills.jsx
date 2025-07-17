import React from "react";
import StarBackground from "../components/Starb";

import { SkillDataProvider } from "./sub/skill-data-provider";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '',
        overflow: 'hidden',
        paddingTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Video background (centered and responsive) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <video
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>

      <StarBackground />
      {/* Hero badge centered above skill images */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem auto',
          padding: '0.5rem 1.5rem',
          borderRadius: '9999px',
          border: '1.5px solid #a78bfa',
          background: 'rgba(255,255,255,0.05)',
          color: '#b49bff',
          fontWeight: 500,
          fontSize: '1rem',
          boxShadow: '0 0 8px 0 #a78bfa44',
          backdropFilter: 'blur(10px)',
          width: 'fit-content',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#b49bff"
          style={{ width: 20, height: 20, marginRight: 10 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 17.657l-1.414 1.414m12.728 0l-1.414-1.414M6.343 6.343L4.929 4.929"
          />
        </svg>
        Think better with Technologies
      </div>

      {/* Skill images overlay (z-10) */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          alignItems: 'center',
          background: 'transparent',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
          {FULLSTACK_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
          {OTHER_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
