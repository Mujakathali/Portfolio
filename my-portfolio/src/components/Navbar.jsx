import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/image.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About me' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' }, // ✅ fixed typo
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Glowing radial light */}
        <div className="navbar-light-overlay" />

        {/* Left: Logo */}
        <div className="navbar-left" style={{ cursor: 'pointer' }} onClick={() => {
          const hero = document.getElementById('hero');
          if (hero) {
            hero.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <img src={logo} alt="Muja Avatar" className="navbar-avatar" />
          <span className="navbar-name">Muja</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="navbar-nav-center">
          <div className="navbar-nav-items">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="navbar-right">
          <a href="https://instagram.com" className="navbar-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/Mujakathali" className="navbar-social" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mujakath-ali-b48125256/" className="navbar-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
