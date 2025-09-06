import { useState } from "react";
import logo from "../assets/logo.png";
import linkedinIcon from "../assets/linkedin.png";   // Add your LinkedIn icon image to assets
import instagramIcon from "../assets/instagram.png"; // Add your Instagram icon image to assets

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="NextLeap IT Solutions Logo" />
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/services">Services</a></li>
        </ul>

        <div className="nav-buttons">
          <a href="/contact">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="nav-social">
          <a href="https://www.linkedin.com/in/nextleap-it-solutions-118707380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/nextleap_it_solutions?igsh=dnQyOHZ0ZG96cGps" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>

        {/* Hamburger Button */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu (Slide-in) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu}>About us</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>
          <li>
            <a href="https://www.linkedin.com/in/nextleap-it-solutions-118707380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/nextleap_it_solutions?igsh=dnQyOHZ0ZG96cGps" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
          </li>
        </ul>
      </div>

      {/* CSS Styling */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: none;
        }
        .logo img {
          height: 40px;
        }
        .nav-links {
          display: flex;
          gap: 20px;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          font-weight: 500;
        }
        .nav-links a:hover {
          color: #3b82f6;
        }
        .nav-buttons a {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          padding: 8px 16px;
          border-radius: 8px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }
        .nav-social {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-left: 32px;
        }
          .nav-buttons {
  margin-left: 18px; /* optional: adds a little space before the button */
}
        .social-icon {
          width: 26px;
          height: 26px;
          object-fit: contain;
          filter: grayscale(0.2) brightness(0.95);
          transition: filter 0.2s, transform 0.2s;
        }
        .social-icon:hover {
          filter: none;
          transform: scale(1.13) rotate(-8deg);
        }

        /* Hamburger (hidden on desktop) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          height: 3px;
          background: #ffeeee;
          border-radius: 3px;
          transition: 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translateY(7px);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-7px);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 70%;
          max-width: 280px;
          height: 100%;
          background: #fff;
          box-shadow: 2px 0 8px rgba(0,0,0,0.15);
          transition: left 0.3s ease-in-out;
          padding: 80px 20px;
          z-index: 999;
        }
        .mobile-menu.open {
          left: 0;
        }
        .mobile-menu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .mobile-menu a {
          text-decoration: none;
          font-size: 1.2rem;
          color: #1f2937;
          font-weight: 600;
        }
        .mobile-menu a:hover {
          color: #3b82f6;
        }
        .mobile-menu .social-icon {
          width: 28px;
          height: 28px;
          margin-right: 8px;
          vertical-align: middle;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links, .nav-buttons, .nav-social {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .header{
            border-radius: 0px;
          }
          .navbar {
            border-radius: 0px;
            background: none;
            padding: 0px;
            flex-direction: row;
          }
          .logo img{
            background: none;
          }
        }
      `}</style>
    </header>
  );
}