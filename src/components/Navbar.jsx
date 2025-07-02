import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">NewsAI</h2>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/summaries">My Summaries</Link>
    </div>
    <input type="text" placeholder="Search..." />
    <button className='btn'>Search</button>
  </nav>
);

export default Navbar;
