import React from 'react';
import MainContent from '../components/MainContent';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Articles from '../components/Articles';

const LandingPage = () => {
  return (
    <div id="home" className="landing-page">
      <MainContent />
      <Features />
      <Testimonials />
      <Articles />
    </div>
  );
};

export default LandingPage;
