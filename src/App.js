import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import About from './components/About';
import Footer from './components/Footer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Features />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
