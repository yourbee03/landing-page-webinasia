import React, { useState } from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Dewi Anggraini",
    company: "Citra Batik Indonesia",
    rating: 5,
    testimonial: "Tim Webinasia benar-benar memahami kebutuhan kami. Desain website yang mereka buat sangat menarik dan sesuai dengan identitas merek kami.",
    photo: "images/user.png"
  },
  {
    name: "Budi Santoso",
    company: "Toko Online Nusantara",
    rating: 4,
    testimonial: "Layanan pengembangan e-commerce Webinasia sangat membantu bisnis kami berkembang. Prosesnya cepat dan hasilnya memuaskan!",
    photo: "images/user.png"
  },
  {
    name: "Siti Nurhaliza",
    company: "Healthy Life Co.",
    rating: 5,
    testimonial: "Webinasia memberikan strategi pemasaran digital yang efektif. Traffic website kami meningkat pesat dalam waktu singkat.",
    photo: "images/user.png"
  },
  {
    name: "Rizky Firmansyah",
    company: "Startup Kreatif",
    rating: 5,
    testimonial: "Kami sangat puas dengan branding yang dibuat oleh Webinasia. Mereka mampu merepresentasikan visi perusahaan kami dengan sangat baik.",
    photo: "images/user.png"
  },
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
      <h2>Apa Kata Klien Kami</h2>
      <h3>Bekerja Bersama Webinasia</h3>
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