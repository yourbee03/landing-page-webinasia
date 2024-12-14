import React from 'react';
import './Articles.css';

const Articles = () => {
  const articles = [
    {
      title: 'Pentingnya Website untuk Bisnis Modern',
      description: 'Mengapa memiliki website adalah langkah krusial untuk bisnis di era digital.',
      link: '/articles/website-for-business',
    },
    {
      title: 'Tips Membuat Website yang User-Friendly',
      description: 'Panduan untuk membuat website yang mudah digunakan dan menarik perhatian pengunjung.',
      link: '/articles/user-friendly-website',
    },
    {
      title: 'Tren Desain Website Tahun Ini',
      description: 'Pelajari tren desain website terbaru yang dapat menginspirasi proyek Anda.',
      link: '/articles/web-design-trends',
    },
  ];

  return (
    <section className="articles-section">
      <h2>Artikel Terkini</h2>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link} className="read-more">
              Baca Selengkapnya
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
