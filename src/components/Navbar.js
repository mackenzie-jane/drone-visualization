// This is the component for the navigation bar which will be at the top of all the pages
import React from 'react';
import { Link } from 'react-router-dom';

// all the pages the navbar will give access to (Home, Information Page, Contact, Drones)
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="custom-nav-link">Home</Link>
        <Link to="/drones" className="custom-nav-link">Drone Dataset</Link>
        <Link to="/info" className="custom-nav-link">Information</Link>
        <Link to="/contact" className="custom-nav-link">Contact</Link>
      </div>
    </nav>

  );
};



export default Navbar;
