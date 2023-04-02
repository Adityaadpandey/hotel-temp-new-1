import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Hotel Logo" />
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/rooms">Rooms</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
