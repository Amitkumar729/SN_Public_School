import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav-wrapper">
        <div className="nav-logo">
          <img src="/assets/navLogo.png" />
          <h4 className="nav-name">S.N.PUBLIC SCHOOL</h4>
        </div>
        <div className="nav-links">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/gallery">
            Gallery
          </a>
          <a className="nav-link" href="/rules&regulations">
            Rules & Regulation
          </a>
         
        </div>
        <button className="contactUs-button">Contact Us</button>
      </nav>
    </div>
  );
};

export default Navbar;
