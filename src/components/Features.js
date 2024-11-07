import React from 'react';
import Slider from 'react-slick';
import './Features.css';

function Features() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Enable center mode for the middle item
    centerPadding: "0", // Remove padding around center item
  };

  return (
    <section className="features">
      <h2>Layanan Kami</h2>
      <Slider {...settings} className="features-carousel">
        <div className="feature-item">
          <img src="feature1.png" alt="Mobile App Development" />
          <h3>Mobile App Development</h3>
          <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
        </div>
        <div className="feature-item active">
          <img src="feature2.png" alt="Web Design & Development" />
          <h3>Web Design & Development</h3>
          <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
        </div>
        <div className="feature-item">
          <img src="feature3.png" alt="Software Testing Service" />
          <h3>Software Testing Service</h3>
          <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
        </div>
        <div className="feature-item">
          <img src="feature4.png" alt="Software Maintenance" />
          <h3>Software Maintenance</h3>
          <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
        </div>
      </Slider>
    </section>
  );
}

export default Features;
