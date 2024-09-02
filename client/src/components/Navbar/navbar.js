import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import MobileMenu from "../MobileMenu/mobileMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = () => {
    navigate('/contact-us');
  };

  const HomeNavigate = () => {
    navigate('/');
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-container">
      <nav className="nav-wrapper">
        <div className="nav-logo" onClick={HomeNavigate} >
          <img src="/assets/navLogo.png" alt="Logo" />
          <h4 className="nav-name">S.N.PUBLIC SCHOOL</h4>
        </div>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Gallery
          </NavLink>
        </div>
        <button className="contactUs-button" onClick={handleNavigate}>Contact Us</button>
        <button className="hamburger-icon" onClick={toggleMobileMenu}>☰</button>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} onNavigate={handleNavigate} />
    </div>
  );
};

export default Navbar;