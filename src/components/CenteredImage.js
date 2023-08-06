import React from 'react';
import './CenteredImage.css';

const CenteredImage = () => {
  return (
    <div className="centered-image-container">
      <p className="centered-image-text">Grüß Gott. Ich bin Tom, Hobby-Developer.</p>
      <p className="centered-image-subtext">Schön, dass du meine Website besuchst.</p>
      <div className="centered-image">
        <img src={require('../images/t5.jpg')} alt="Centered" />
      </div>
    </div>
  );
};

export default CenteredImage;
