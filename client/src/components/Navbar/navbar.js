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
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Academics
          </a>
          <a className="nav-link" href="#">
            Infrastructure
          </a>
          <a className="nav-link" href="#">
            Management
          </a>
          <a className="nav-link" href="#">
          Gallery
          </a>
          <a className="nav-link" href="#">
          Rules & Regulation
          </a>
          <a className="nav-link" href="#">
            Notice
          </a>
        </div>
        <button className="contactUs-button">Contact Us</button>
      </nav>
    </div>
  );
};

export default Navbar;
