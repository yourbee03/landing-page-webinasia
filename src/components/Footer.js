import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src="images/logo.png" alt="Webinasia Logo" className="footer-logo" />
          <p>Webinasia adalah Platform yang membantu anda mencapai ......</p>
        </div>

        <div className="footer-links-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#areas-we-serve">Areas We Serve</a></li>
          </ul>
        </div>
        <div className="footer-contact-section">
          <h3>Contact us</h3>
          <div className="email-info">
            <img src="/images/email.png" alt="Email Icon" className="email-icon" />
            <a href="mailto:webinasia966@gmail.com" className="email-link">webinasia</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <p>&copy; 2023 Copyright by Webinasia. All rights reserved.</p>
        <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/webinasia.id" target="_blank" rel="noopener noreferrer">
          <img src="images/instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@webinasia.id" target="_blank" rel="noopener noreferrer">
          <img src="images/tik-tok.png" alt="TikTok" className="social-icon" />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
