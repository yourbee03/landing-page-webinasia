import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DomainPage from './pages/DomainPage';
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import RegisterPage from "./pages/RegisterPage";
import Homepage from './pages/HomePage'; // Halaman homepage baru
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsRegistered(false); // Reset isRegistered when logging in
  };

  const handleLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
  };

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} /> {/* Rute untuk homepage baru */}
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/domain" element={<DomainPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/home" element={<LandingPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;