import React, { useState } from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Romeena De Silva",
    company: "Janet Cosmetics",
    rating: 5,
    testimonial: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies...",
    photo: "images/user.png"
  },
  {
    name: "John Doe",
    company: "Doe Ventures",
    rating: 4,
    testimonial: "Aplikasi ini sangat membantu saya dalam pekerjaan sehari-hari!",
    photo: "images/user.png"
  },
  {
    name: "Jane Smith",
    company: "Smith & Co.",
    rating: 5,
    testimonial: "Fitur-fiturnya lengkap dan mudah digunakan.",
    photo: "images/user.png"
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonialsData[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one testimonial fully in the center
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", // Center the active item
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <button className="slick-prev">❮</button>,
    nextArrow: <button className="slick-next">❯</button>,
    afterChange: (current) => setActiveTestimonial(testimonialsData[current])
  };
  

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <section className="testimonials">
      <h2>Apa Yang Klien Katakan</h2>
      <h3>Working with Us</h3>
      <div className="testimonial-content">
        <p className="testimonial-text">"{activeTestimonial.testimonial}"</p>
      </div>
      <Slider {...settings} className="testimonial-carousel">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={`testimonial-item ${activeTestimonial === testimonial ? 'active' : ''}`}>
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-company">{testimonial.company}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
