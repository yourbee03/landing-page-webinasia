import React from 'react';
import './Homepage.css';

const Homepage = () => {
  const benefits = [
    "Meningkatkan kredibilitas bisnis Anda.",
    "Dapat diakses kapan saja dan di mana saja.",
    "Memperluas jangkauan pasar.",
    "Meningkatkan brand awareness.",
    "Mempermudah komunikasi dengan pelanggan."
  ];

  const articles = [
    {
      title: "Mengapa Website Penting untuk Bisnis?",
      summary: "Pelajari bagaimana website dapat membantu bisnis Anda tumbuh lebih cepat di era digital.",
      link: "#"
    },
    {
      title: "Tips Memilih Domain untuk Website Anda",
      summary: "Domain yang tepat dapat meningkatkan daya tarik website Anda. Simak tipsnya di sini.",
      link: "#"
    },
    {
      title: "Strategi SEO Dasar untuk Pemula",
      summary: "Optimalkan website Anda agar mudah ditemukan di mesin pencari dengan strategi dasar SEO ini.",
      link: "#"
    }
  ];

  return (
    <div id="homepage" className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Selamat Datang di Webinasia</h1>
        <p>Solusi terpercaya untuk membuat website profesional yang meningkatkan kehadiran online Anda.</p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Tentang Webinasia</h2>
        <p>
          Webinasia adalah layanan pembuatan website yang dirancang untuk membantu bisnis Anda
          tampil lebih profesional dan mudah ditemukan di dunia digital. Kami menyediakan berbagai
          paket layanan yang sesuai dengan kebutuhan Anda.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Keuntungan Memiliki Website</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <h2>Artikel Terbaru</h2>
        <div className="articles-container">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <a href={article.link} className="read-more">Baca Selengkapnya</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
