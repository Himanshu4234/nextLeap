import { useState } from "react";
import logo from "../assets/logo.png";

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

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links, .nav-buttons {
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
      `}</style>
    </header>
  );
}
