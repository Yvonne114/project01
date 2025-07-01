import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <button onClick={goToAbout}>Go to About Page</button>
  );
}

export default NavigateButton;