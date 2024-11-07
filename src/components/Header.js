import React from 'react';
import './Header.css';  // Import custom styles

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="images/logo.png" alt="Webinasia Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#domain">Domain</a></li>
          <li><a href="#website-builder">Website Builder</a></li>
          <li><a href="#hosting">Hosting</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <button className="login-btn">Log In</button>
      </nav>
    </header>
  );
};

export default Header;
