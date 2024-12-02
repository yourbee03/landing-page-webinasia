import React from 'react';
import MainContent from '../components/MainContent';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <MainContent />
      <Features />
      <Testimonials />
      <About />
    </div>
  );
};

export default LandingPage;
