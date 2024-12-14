import React, { useState } from "react";
import axios from "axios";
import "./DomainPage.css";

const DomainPage = () => {
  const domains = [
    { name: ".id", price: "Rp 20.000", duration: "/tahun" },
    { name: ".com", price: "Rp 30.000", duration: "/tahun" },
    { name: ".online", price: "Rp 40.000", duration: "/tahun" },
    { name: ".xyz", price: "Rp 25.000", duration: "/tahun" },
    { name: ".icu", price: "Rp 35.000", duration: "/tahun" },
    { name: ".cloud", price: "Rp 50.000", duration: "/tahun" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDomains, setFilteredDomains] = useState(domains);
  const [domainAvailability, setDomainAvailability] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 

  const API_KEY = "at_xZ1d7oLryHzjryRQ8KxAq9pNJuEwt";

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setFilteredDomains(domains);
      setDomainAvailability(null);
      return;
    }

    setIsLoading(true);
    setDomainAvailability(null);
    try {
      const response = await axios.get(
        `https://domain-availability.whoisxmlapi.com/api/v1`,
        {
          params: {
            apiKey: API_KEY,
            domainName: searchTerm,
          },
        }
      );

      const isAvailable =
        response.data.DomainInfo.domainAvailability === "AVAILABLE";

      setDomainAvailability(
        isAvailable ? "Domain tersedia untuk didaftarkan" : "Domain sudah terdaftar"
      );
    } catch (error) {
      console.error("Error checking domain availability:", error);
      setDomainAvailability("Gagal memeriksa domain. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div id="domain" className="domain-page">
      {/* Hero Section */}
      <header className="domain-hero">
        <div className="hero-content">
          <h1>Cek dan Beli Domain Murah</h1>
          <p>Dapatkan domain terbaik dengan harga terjangkau dan fitur lengkap.</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Masukkan nama domain (misal: webinasia.id)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Cari Domain</button>
          </div>
          {isLoading && <p className="loading-text">Mencari domain...</p>}
          {domainAvailability && <p className="availability-status">{domainAvailability}</p>}
        </div>
      </header>

      {/* Domain Cards Section */}
      <section className="domain-cards-section">
        <h2>Domain Tersedia</h2>
        <div className="domain-cards">
          {filteredDomains.length > 0 ? (
            filteredDomains.map((domain, index) => (
              <div className="domain-card" key={index}>
                <div className="domain-info">
                  <h3>{domain.name}</h3>
                  <p>
                    <strong>{domain.price}</strong> {domain.duration}
                  </p>
                </div>
                <button className="buy-button">Beli Sekarang</button>
              </div>
            ))
          ) : (
            <p className="no-results">Domain tidak ditemukan.</p>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-box">
          <h3>Apa Itu Domain?</h3>
          <p>
            Domain adalah alamat unik di internet yang digunakan untuk mengakses website Anda. Memiliki domain sendiri
            meningkatkan kredibilitas dan profesionalitas bisnis online Anda.
          </p>
        </div>
        <div className="info-box">
          <h3>Kenapa Domain Penting?</h3>
          <p>
            Domain menciptakan identitas online yang kuat, memudahkan pengguna menemukan bisnis Anda, dan meningkatkan
            visibilitas di mesin pencari.
          </p>
        </div>
        <div className="info-box">
          <h3>Cara Memilih Domain yang Tepat</h3>
          <p>
            Pilih nama domain yang mudah diingat, relevan dengan bisnis Anda, dan hindari penggunaan angka atau
            tanda hubung untuk memudahkan pengguna dalam mengingat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DomainPage;
