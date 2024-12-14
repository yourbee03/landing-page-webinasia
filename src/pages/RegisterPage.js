import React, { useState } from 'react';
import './RegisterPage.css'; // Import CSS for 3D effect and styling

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username and password are provided before submitting
    if (username && password) {
      const user = { username, password };
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User Registered:', user); // For debugging purposes
      onRegister(); // Trigger the onRegister function from parent component
    } else {
      console.log('Please provide both username and password'); // For debugging
    }
  };

  return (
    <div className="register-container">
      <div className="intro-content">
        <h1>Selamat Datang di Aplikasi Kami!</h1>
        <p>
          Daftar sekarang untuk menikmati pengalaman terbaik dalam menggunakan platform kami.
          Bergabunglah dengan komunitas kami dan mulai perjalanan Anda sekarang juga.
        </p>
      </div>

      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>

      <div className="register-footer">
        <p>Sudah punya akun? <a href="/login">Login disini</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
