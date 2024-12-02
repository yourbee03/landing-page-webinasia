import React from 'react';
import './DetailPage.css';

const DetailPage = () => {
  const features = [
    "Fitur 1: Lorem ipsum dolor sit amet",
    "Fitur 2: Lorem ipsum dolor sit amet",
    "Fitur 3: Lorem ipsum dolor sit amet",
    "Fitur 4: Lorem ipsum dolor sit amet",
    "Fitur 5: Lorem ipsum dolor sit amet",
  ];

  const plans = [
    { name: "Basic", price: "Rp 20.000", features: [true, false, true, false, false] },
    { name: "Pro", price: "Rp 30.000", features: [true, true, true, true, false] },
    { name: "Ultimate", price: "Rp 50.000", features: [true, true, true, true, true] }
  ];

  const templates = [
    { name: "Template 1", category: "Business", imageUrl: "https://via.placeholder.com/300x200", previewUrl: "https://example.com/template1" },
    { name: "Template 2", category: "E-commerce", imageUrl: "https://via.placeholder.com/300x200", previewUrl: "https://example.com/template2" },
    { name: "Template 3", category: "Portfolio", imageUrl: "https://via.placeholder.com/300x200", previewUrl: "https://example.com/template3" }
  ];

  const openPreview = (url) => {
    window.open(url, '_blank', 'width=800,height=600');
  };

  return (
    <div className="detail-page">
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
              <button>Pilih Paket</button>
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

      {/* Features Section */}
      <section className="features-section">
        <h2>Fitur</h2>
        <div className="features-container">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
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

      {/* Footer Section */}
      <footer className="footer-section">
        <p>© 2024 Webinasia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DetailPage;
