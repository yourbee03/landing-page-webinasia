import React, { useState } from 'react';
import './OrderPage.css';

const OrderPage = () => {
  const [websiteName, setWebsiteName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      websiteName,
      selectedTemplate,
      selectedPackage,
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
        setWebsiteName('');
        setSelectedTemplate('');
        setSelectedPackage('');
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

        <div className="mb-3">
          <label htmlFor="package" className="form-label">Paket yang Dipilih</label>
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
              <label htmlFor="packageA" className="form-check-label">Paket A</label>
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
              <label htmlFor="packageB" className="form-check-label">Paket B</label>
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
              <label htmlFor="packageC" className="form-check-label">Paket C</label>
            </div>
          </div>
        </div>

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
            <option value="Kartu Kredit">QRIS</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Pesan Sekarang</button>
      </form>
    </div>
  );
};

export default OrderPage;
