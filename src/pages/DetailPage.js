import React from 'react';
import './DetailPage.css';

const DetailPage = () => {
  const features = [
    "Custom Domain",
    "Desain Profesional",
    "Dukungan SEO Dasar",
    "Integrasi Media Sosial",
    "Pembaharuan Konten Bulanan",
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

  const openPreview = (url) => {
    window.open(url, '_blank', 'width=800,height=600');
  };

  return (
    <div id="detail" className="detail-page">
      {/* Header Section */}
      <section className="header-section">
        <h1>Detail Paket</h1>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-container">
          {plans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={feature ? "enabled" : "disabled"}>
                    {features[idx]}
                  </li>
                ))}
              </ul>
              <button className="select-button">Pilih Paket</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contoh Template Section */}
      <section className="template-section">
        <h2>Contoh Template</h2>
        <div className="template-list">
          {templates.map((template, index) => (
            <div className="template-item" key={index}>
              <img src={template.imageUrl} alt={template.name} />
              <div className="template-info">
                <p>{template.name}</p>
                <p><strong>Kategori:</strong> {template.category}</p>
                <button className="preview-button" onClick={() => openPreview(template.previewUrl)}>Live Preview</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
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
