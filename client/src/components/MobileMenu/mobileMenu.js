import React from "react";
import { NavLink } from "react-router-dom";
import "./mobileMenu.css";

const mobileMenu = ({ isOpen, onClose, onNavigate }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-menu" onClick={onClose}>×</button>
      <div className="mobile-nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
          onClick={onClose}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
          onClick={onClose}
        >
          About
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
          onClick={onClose}
        >
          Gallery
        </NavLink>
      </div>
      <button className="mobile-contactUs-button" onClick={() => { onNavigate(); onClose(); }}>
        Contact Us
      </button>
    </div>
  );
};

export default mobileMenu;