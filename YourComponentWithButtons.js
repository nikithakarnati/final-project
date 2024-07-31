// src/YourComponentWithButtons.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function YourComponentWithButtons() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleCreateFormBotClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <button onClick={handleSignInClick}>Sign In</button>
      <button onClick={handleCreateFormBotClick}>Create a FormBot</button>
    </div>
  );
}

export default YourComponentWithButtons;
