import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
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
    { href: '#acheivments', label: ' Achievments' },
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
        {/* Light strip */}
        <div className="navbar-light-overlay" />

        <div className="navbar-left">
          <img src="/logo.png" alt="Avatar" className="navbar-avatar" />
          <span className="navbar-name">Muja</span>
        </div>

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

        <div className="navbar-right">
          <a href="#" className="navbar-social" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="navbar-social" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className="navbar-social" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
