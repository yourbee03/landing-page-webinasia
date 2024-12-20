import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        <div className="text-section">
          <h1>
            Buat <span className="highlight">Website</span> Di Webinasia
          </h1>
          <h2>
            Dengan <strong>Mudah</strong> Dan <strong>Cepat</strong>
          </h2>
          <ul className="features-list">
            <li>Gratis Domain</li>
            <li>Bantuan Pelanggan 24/7</li>
            <li>Template Berkualitas</li>
          </ul>
          <div className="price">
            Mulai Dari Rp.<span className="price-amount">40.000</span>/bln
          </div>
          <Link to="/order">
            <button className="promo-btn">Pesan Sekarang</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
