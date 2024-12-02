import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DomainPage from './pages/DomainPage';
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/domain" element={<DomainPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
