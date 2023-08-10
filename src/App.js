/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/footer';
import CenteredImage from './components/CenteredImage';
import './App.css';


const App = () => (
  <Router>
    <div>
      <nav className="navbar">
        <div className="navbar-right">
          <Link to="/" class="navbar-item">
            <span className="navbar-text">Home</span>
          </Link>
          <Link to="/about" class="navbar-item">
            <span className="navbar-text">About</span>
          </Link>
          <Link to="/portfolio" class="navbar-item">
            <span className="navbar-text">Portfolio</span>
          </Link>
          <Link to="/contact" class="navbar-item">
            <span className="navbar-text">Contact</span>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <CenteredImage /> {/* Include the CenteredImage component here */}
      <Footer /> {/* Add the Footer component at the bottom of the page */}
    </div>
  </Router>
);

export default App;
