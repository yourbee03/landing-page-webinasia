import React from 'react';
import Slider from 'react-slick';
import './Features.css';
import { FaBrush, FaLaptopCode, FaSearch, FaShoppingCart, FaPenFancy } from 'react-icons/fa';

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
      <h2>Layanan Webinasia</h2>
      <Slider {...settings} className="features-carousel">
        <div className="feature-item">
          <FaBrush className="feature-icon" />
          <h3>Branding & Identity</h3>
          <p>Kami membantu membangun identitas merek yang kuat dan konsisten untuk bisnis Anda, mulai dari desain logo hingga strategi pemasaran.</p>
        </div>
        <div className="feature-item active">
          <FaLaptopCode className="feature-icon" />
          <h3>Desain & Pengembangan Website</h3>
          <p>Kami menciptakan website yang responsif, modern, dan sesuai kebutuhan bisnis Anda untuk meningkatkan kehadiran online.</p>
        </div>
        <div className="feature-item">
          <FaSearch className="feature-icon" />
          <h3>Optimasi SEO</h3>
          <p>Dapatkan peringkat lebih tinggi di mesin pencari dan tingkatkan visibilitas website Anda dengan layanan SEO profesional kami.</p>
        </div>
        <div className="feature-item">
          <FaShoppingCart className="feature-icon" />
          <h3>Pengembangan E-Commerce</h3>
          <p>Mulai toko online Anda dengan fitur canggih dan pengalaman pengguna yang mudah untuk meningkatkan penjualan Anda.</p>
        </div>
        <div className="feature-item">
          <FaPenFancy className="feature-icon" />
          <h3>Konten & Strategi Pemasaran</h3>
          <p>Kami merancang strategi konten yang menarik dan relevan untuk membangun hubungan dengan audiens Anda secara efektif.</p>
        </div>
      </Slider>
    </section>
  );
}

export default Features;
