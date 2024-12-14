import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap

const LoginButton = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleLoginClick = () => {
    // Navigate to the login page when the button is clicked
    navigate('/login');
  };

  return (
    <Button variant="warning" className="text-white" onClick={handleLoginClick}>
      Log In
    </Button>
  );
};

export default LoginButton;
