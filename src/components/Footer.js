import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src="images/logo.png" alt="Webinasia Logo" className="footer-logo" />
          <p className="footer-description">
            Webinasia adalah platform yang membantu Anda mencapai tujuan dengan solusi inovatif dan teknologi terkini.
          </p>
        </div>

        <div className="footer-links-and-contact">
          <div className="footer-links-section">
            <h3>Links</h3>
            <ul>
              <li><a href="#about-us">Tentang Kami</a></li>
              <li><a href="#services">Layanan</a></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h3>Hubungi Kami</h3>
            <div className="email-info">
              <img src="/images/email.png" alt="Email Icon" className="email-icon" />
              <a href="mailto:webinasia966@gmail.com" className="email-link">Email Webinasia</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Webinasia. All rights reserved.</p>
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
