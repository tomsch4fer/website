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

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">
              <span className="navbar-icon">
                <AiOutlineUser />
              </span>
              <span className="navbar-text">Tom Schäfer</span>
            </Link>
          </div>
          <div className="navbar-right">
            <Link to="/" className="navbar-link">
              <span className="navbar-icon">
                <AiOutlineHome />
              </span>
              <span className="navbar-text">Home</span>
            </Link>
            <Link to="/about" className="navbar-link">
              <span className="navbar-icon">
                <AiOutlineUser />
              </span>
              <span className="navbar-text">About</span>
            </Link>
            <Link to="/portfolio" className="navbar-link">
              <span className="navbar-icon">
                <AiOutlineProject />
              </span>
              <span className="navbar-text">Portfolio</span>
            </Link>
            <Link to="/contact" className="navbar-link">
              <span className="navbar-icon">
                <AiOutlineMail />
              </span>
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
};

export default App;
