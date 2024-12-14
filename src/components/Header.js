import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = ({ isLoggedIn, handleLogin, handleLogout }) => {
  const location = useLocation(); // Mendapatkan rute saat ini
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setActiveSection(location.pathname); // Update bagian aktif berdasarkan rute
  }, [location.pathname]);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-3">
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <img
          src="images/logo.png"
          alt="Webinasia Logo"
          style={{ width: '40px', marginRight: '10px', cursor: 'pointer' }}
        />
        <span className="fw-bold">WEBINASIA.ID</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Link
            to="/home"
            className={`nav-link ${activeSection === '/home' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/domain"
            className={`nav-link ${activeSection === '/domain' ? 'active' : ''}`}
          >
            Domain
          </Link>
          <Link
            to="/order"
            className={`nav-link ${activeSection === '/order' ? 'active' : ''}`}
          >
            Pesanan
          </Link>
          <Link
            to="/detail"
            className={`nav-link ${activeSection === '/detail' ? 'active' : ''}`}
          >
            Keterangan
          </Link>
          <Link
            to="/about-us"
            className={`nav-link ${activeSection === '/about-us' ? 'active' : ''}`}
          >
            Tentang Kami
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
