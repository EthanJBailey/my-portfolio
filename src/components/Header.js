// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <nav>
        <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
        <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
        <Link to="technologies" smooth={true} duration={500} className="nav-link">Technologies</Link>
        <Link to="resume" smooth={true} duration={500} className="nav-link">Resume</Link>
      </nav>
    </header>
  );
}

export default Header;
