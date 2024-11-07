import React from 'react';
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
            <li>✔ Gratis Domain</li>
            <li>✔ Bantuan Pelanggan 24/7</li>
            <li>✔ 10 Template Free</li>
          </ul>
          <div className="price">
            Rp. <span className="price-amount">120.000</span>/bln
          </div>
          <button className="promo-btn">Cek Promo</button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
