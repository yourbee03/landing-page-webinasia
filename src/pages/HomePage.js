import React from 'react';
import './Homepage.css';

const Homepage = () => {
  const benefits = [
    {
      title: "Meningkatkan Kredibilitas",
      description: "Dengan memiliki website profesional, bisnis Anda akan terlihat lebih terpercaya di mata pelanggan.",
      icon: "🌟"
    },
    {
      title: "Akses Kapan Saja",
      description: "Pelanggan dapat mengakses informasi bisnis Anda kapan saja dan di mana saja.",
      icon: "⏰"
    },
    {
      title: "Memperluas Jangkauan",
      description: "Website memungkinkan bisnis Anda menjangkau pelanggan di seluruh dunia.",
      icon: "🌍"
    },
    {
      title: "Brand Awareness",
      description: "Meningkatkan kesadaran merek dengan menyampaikan pesan bisnis Anda secara konsisten.",
      icon: "📣"
    },
    {
      title: "Komunikasi Mudah",
      description: "Website mempermudah komunikasi dengan pelanggan melalui fitur seperti formulir kontak.",
      icon: "📮"
    },
    {
      title: "Peningkatan Penjualan",
      description: "Website dapat menjadi platform untuk menjual produk atau layanan Anda secara langsung.",
      icon: "💰"
    },
    {
      title: "Analitik & Data",
      description: "Pantau kinerja bisnis Anda melalui data dan laporan yang dihasilkan dari website.",
      icon: "📊"
    },
    {
      title: "Hemat Biaya Promosi",
      description: "Promosi digital melalui website lebih hemat dibandingkan metode tradisional.",
      icon: "💡"
    }
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
    },
    {
      title: "Panduan Mendesain Website Modern",
      summary: "Pelajari cara mendesain website yang menarik dan modern untuk audiens Anda.",
      link: "#"
    },
    {
      title: "Memahami Hosting dan Cloud untuk Website",
      summary: "Cari tahu perbedaan hosting dan cloud serta cara memilih yang terbaik untuk website Anda.",
      link: "#"
    }
  ];

  return (
    <div id="homepage" className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Selamat Datang di Webinasia</h1>
        <p>Solusi terpercaya untuk membuat website profesional yang meningkatkan kehadiran online Anda.</p>
        <a href="/home" className="explore-button">
  Jelajahi Sekarang <span className="arrow">→</span>
</a>

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
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <h2>Artikel Terbaru</h2>
        <div className="articles-container">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">Baca Selengkapnya</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
