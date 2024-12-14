import React, { useState } from 'react';
import './OrderPage.css';

const OrderPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [domainName, setDomainName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      selectedPackage,
      websiteName,
      domainName,
      selectedTemplate,
      paymentMethod,
    };

    try {
      const response = await fetch('<YOUR_GOOGLE_SCRIPT_URL>', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === 'success') {
        alert('Pemesanan berhasil disimpan ke Google Sheet!');
        // Reset form
        setSelectedPackage('');
        setWebsiteName('');
        setDomainName('');
        setSelectedTemplate('');
        setPaymentMethod('');
      } else {
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (error) {
      console.error(error);
      alert('Gagal menyimpan data. Periksa koneksi internet Anda.');
    }
  };

  return (
    <div className="order-page container">
      <h1 className="text-center mt-4">Pemesanan Website</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Package Selection */}
        <div className="mb-3">
          <label className="form-label">Paket yang Dipilih</label>
          <div>
            <div className="form-check">
              <input
                type="radio"
                id="packageA"
                name="package"
                value="Paket A"
                className="form-check-input"
                checked={selectedPackage === 'Paket A'}
                onChange={(e) => setSelectedPackage(e.target.value)}
              />
              <label htmlFor="packageA" className="form-check-label">Paket Basic</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="packageB"
                name="package"
                value="Paket B"
                className="form-check-input"
                checked={selectedPackage === 'Paket B'}
                onChange={(e) => setSelectedPackage(e.target.value)}
              />
              <label htmlFor="packageB" className="form-check-label">Paket Pro</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="packageC"
                name="package"
                value="Paket C"
                className="form-check-input"
                checked={selectedPackage === 'Paket C'}
                onChange={(e) => setSelectedPackage(e.target.value)}
              />
              <label htmlFor="packageC" className="form-check-label">Paket Premium</label>
            </div>
          </div>
        </div>

        {/* Website Name */}
        <div className="mb-3">
          <label htmlFor="websiteName" className="form-label">Nama Website</label>
          <input
            type="text"
            className="form-control"
            id="websiteName"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            required
          />
        </div>

        {/* Domain Name */}
        <div className="mb-3">
          <label htmlFor="domainName" className="form-label">Nama Domain</label>
          <select
            id="domainName"
            className="form-select"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            required
          >
            <option value="">Pilih Domain</option>
            {selectedPackage === 'Paket A' ? (
              <option value=".web.id">.web.id</option>
            ) : (
              <>
                <option value=".com">.com</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
                <option value=".co">.co</option>
                <option value=".info">.info</option>
                <option value=".biz">.biz</option>
                <option value=".name">.name</option>
                <option value=".tv">.tv</option>
                <option value=".me">.me</option>
                <option value=".xyz">.xyz</option>
                <option value=".online">.online</option>
                <option value=".tech">.tech</option>
                <option value=".io">.io</option>
                <option value=".ai">.ai</option>
                <option value=".app">.app</option>
                <option value=".cloud">.cloud</option>
                <option value=".shop">.shop</option>
                <option value=".store">.store</option>
                <option value=".design">.design</option>
              </>
            )}
          </select>
        </div>

        {/* Template Selection */}
        <div className="mb-3">
          <label htmlFor="template" className="form-label">Template yang Dipilih</label>
          <select
            id="template"
            className="form-select"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            required
          >
            <option value="">Pilih Template</option>
            <option value="Template 1">Template 1</option>
            <option value="Template 2">Template 2</option>
            <option value="Template 3">Template 3</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Metode Pembayaran</label>
          <select
            id="paymentMethod"
            className="form-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Pilih Metode Pembayaran</option>
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="E-Wallet">E-Wallet</option>
            <option value="QRIS">QRIS (Saat Ini Belum Tersedia)</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Pesan Sekarang</button>
      </form>
    </div>
  );
};

export default OrderPage;
