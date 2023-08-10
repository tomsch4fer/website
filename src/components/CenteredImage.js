import React from 'react';
import './CenteredImage.css';

const CenteredImage = () => {
  return (
    <div className="centered-image-container">
      <div className="centered-image">
      <p className="centered-image-text">Grüß Gott. Ich bin Tom, Hobby-Entwickler.</p>
      <p className="centered-image-subtext">Schön, dass du meine Website besuchst.</p>
        <img src={require('../images/t5.jpg')} alt="pic of me" />
      </div>
    </div>
  );
};

export default CenteredImage;
