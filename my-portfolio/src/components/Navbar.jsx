import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaBars } from 'react-icons/fa';
import logo from '../assets/image.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 540);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 540);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // close menu on click
    }
  };

  return (
    <nav className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Light overlay */}
        <div className="navbar-light-overlay" />

        {/* Left: Logo & Name */}
        <div className="navbar-left" onClick={() => {
          const hero = document.getElementById('hero');
          if (hero) hero.scrollIntoView({ behavior: 'smooth' });
        }}>
          <img src={logo} alt="Muja Avatar" className="navbar-avatar" />
          <span className="navbar-name">Muja</span>
        </div>

        {/* Hamburger Icon for ≤ 360px */}
        {isMobileView && (
          <div className="hamburger-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars />
          </div>
        )}

        {/* Center Nav Items */}
        {!isMobileView ? (
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
        ) : (
          isMobileMenuOpen && (
            <div className="mobile-menu">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )
        )}

        {/* Right: Social Icons */}
        {!isMobileView && (
          <div className="navbar-right">
            <a href="https://instagram.com" className="navbar-social"><FaInstagram /></a>
            <a href="https://github.com/Mujakathali" className="navbar-social"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mujakath-ali-b48125256/" className="navbar-social"><FaLinkedin /></a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
