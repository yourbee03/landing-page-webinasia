import React, { useState } from 'react';
import './DetailPage.css';

const DetailPage = () => {
  const features = [
    "Domain Kustom",
    "Desain Profesional",
    "Dukungan SEO Dasar",
    "Integrasi Media Sosial",
    "Pembaruan Konten Bulanan",
  ];

  const plans = [
    { name: "Basic", price: "Rp 500.000/bulan", features: [true, true, false, false, false] },
    { name: "Pro", price: "Rp 1.000.000/bulan", features: [true, true, true, true, false] },
    { name: "Premium", price: "Rp 2.000.000/bulan", features: [true, true, true, true, true] }
  ];

  const templates = [
    { 
      name: "Astra", 
      category: "E-commerce", 
      imageUrl: "/images/template1.png", 
      previewUrl: "https://websitedemos.net/t-shirts-store-04/?customize=template" 
    },
    { 
      name: "Flatsome", 
      category: "Fashion", 
      imageUrl: "/images/template2.png", 
      previewUrl: "https://demos.flatsome.com/demos/shop-demos/fullscreen-fashion/" 
    },
    { 
      name: "Kalium", 
      category: "F&B", 
      imageUrl: "/images/template3.png", 
      previewUrl: "https://demo.kaliumtheme.com/restaurant/" 
    }
  ];

  const pricingDetails = [
    {
      feature: "Pembuatan Halaman Website",
      basic: "5 Halaman",
      pro: "10 Halaman",
      premium: "15 Halaman",
    },
    {
      feature: "Waktu Pengerjaan",
      basic: "2 Hari Kerja",
      pro: "3 Hari Kerja",
      premium: "5 Hari Kerja",
    },
    {
      feature: "Domain Gratis",
      basic: "✔",
      pro: "✔",
      premium: "✔",
    },
    {
      feature: "Hosting Gratis",
      basic: "Entry Level",
      pro: "Unlimited Small",
      premium: "Unlimited Small",
    },
    {
      feature: "Email Gratis (bisnis)",
      basic: "-",
      pro: "✔",
      premium: "✔",
    },
    {
      feature: "SSL Gratis",
      basic: "✔",
      pro: "✔",
      premium: "✔",
    },
    {
      feature: "SEO Dasar",
      basic: "5 Halaman",
      pro: "10 Halaman",
      premium: "15 Halaman",
    },
    {
      feature: "Edit Gambar Dasar",
      basic: "5 Gambar",
      pro: "10 Gambar",
      premium: "15 Gambar",
    },
  ];

  const maintenanceDetails = [
    {
      feature: "Update / Edit Halaman Website",
      basic: "1 halaman",
      pro: "2 halaman",
      premium: "3 halaman",
    },
    {
      feature: "Biaya Update / Edit Halaman Tambahan",
      basic: "Rp 20.000 / halaman",
      pro: "Rp 20.000 / halaman",
      premium: "Rp 20.000 / halaman",
    },
    {
      feature: "Buat Halaman Baru (oleh Pelanggan)",
      basic: "Upgrade paket (biaya tambahan sesuai paket)",
      pro: "Upgrade paket (biaya tambahan sesuai paket)",
      premium: "Gratis",
    },
    {
      feature: "Buat Halaman Baru (oleh Kami)",
      basic: "Upgrade paket (biaya tambahan sesuai paket) + Rp. 50.000/halaman",
      pro: "Upgrade paket (biaya tambahan sesuai paket) + Rp. 50.000/halaman",
      premium: "Rp 50.000 / halaman",
    },
    {
      feature: "Edit Gambar Dasar",
      basic: "Rp 15.000 / gambar",
      pro: "Rp 15.000 / gambar",
      premium: "Rp 15.000 / gambar",
    },
  ];
  

  const openPreview = (url) => {
    window.open(url, '_blank', 'width=800,height=600');
  };

  return (
    <div id="detail" className="detail-page">
      {/* Header Section */}
      <section className="header-section">
        <h1>Detail Paket</h1>
      </section>

      {/* Harga Section */}
      <section className="pricing-section">
        <h2>Harga</h2>
        <p>Miliki website Anda hanya dengan Rp. 49.000 per bulan.</p>
        <table className="harga-table">
          <thead>
            <tr>
              <th>Spesifikasi Layanan</th>
              <th>Basic</th>
              <th>Pro</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            {pricingDetails.map((detail, index) => (
              <tr key={index}>
                <td>{detail.feature}</td>
                <td>{detail.basic}</td>
                <td>{detail.pro}</td>
                <td>{detail.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Maintenance Section */}
        <h3>Maintenance</h3>
        <table className="maintenance-table">
          <thead>
            <tr>
              <th>Fitur</th>
              <th>Basic</th>
              <th>Pro</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceDetails.map((detail, index) => (
              <tr key={index}>
                <td>{detail.feature}</td>
                <td>{detail.basic}</td>
                <td>{detail.pro}</td>
                <td>{detail.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Template Section */}
      <section className="template-section">
        <h2>Contoh Template</h2>
        <div className="template-list">
          {templates.map((template, index) => (
            <div className="template-item" key={index}>
              <img src={template.imageUrl} alt={template.name} />
              <div className="template-info">
                <p>{template.name}</p>
                <p><strong>Kategori:</strong> {template.category}</p>
                <button className="preview-button" onClick={() => openPreview(template.previewUrl)}>Lihat Pratinjau</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perbandingan Paket Section */}
      <section className="comparison-section">
        <h2>Perbandingan Paket</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Fitur</th>
              {plans.map((plan, index) => (
                <th key={index}>{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td>{feature}</td>
                {plans.map((plan, idx) => (
                  <td key={idx} className={plan.features[index] ? "tick" : "cross"}>
                    {plan.features[index] ? "✔" : "✖"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DetailPage;
