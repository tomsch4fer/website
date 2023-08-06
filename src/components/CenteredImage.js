import React from 'react';
import './CenteredImage.css';

const CenteredImage = () => {
  return (
    <div className="centered-image">
      <img src={require('../images/t1.jpg')} alt="Centered Image" />
    </div>
  );
};

export default CenteredImage;
