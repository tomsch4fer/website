import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tom Schäfer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
