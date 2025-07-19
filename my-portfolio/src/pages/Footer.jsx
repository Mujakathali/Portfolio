import React from "react";
import StarBackground from "../components/Starb";

const Footer = () => (
  <footer
    style={{
      width: "100%",
      color: "#fff",
      padding: "32px 0 16px 0",
      textAlign: "center",
      borderTop: "1.5px solid #7a5aff44",
      boxShadow: "0 -2px 24px 0 #7a5aff22",
      marginTop: "auto",
      fontSize: "1rem",
      zIndex: 10,
      position: "relative",
    }}
  >
   
    <div style={{ marginBottom: "12px", fontWeight: 600, fontSize: "1.1rem" }}>
      Mujakath Ali M
    </div>
    <div style={{ marginBottom: "10px", opacity: 0.8 }}>
      &copy; {new Date().getFullYear()} Mujakath Ali M. All rights reserved.
    </div>
    <div style={{ display: "flex", justifyContent: "center", gap: "18px", marginTop: "8px" }}>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#a78bfa", textDecoration: "none", fontSize: "1.3rem" }}
        aria-label="GitHub"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#60a5fa", textDecoration: "none", fontSize: "1.3rem" }}
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
    <style>{`
      @media (max-width: 600px) {
        footer {
          font-size: 0.95rem;
          padding: 24px 0 10px 0;
        }
      }
    `}</style>
  </footer>
);

export default Footer;