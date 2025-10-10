// Library Imports
import React from 'react'
import { Link } from 'react-router-dom';

//Images
import logo from "../Assets/Logo.svg";

function NavigationBar() {
  return (
    <nav id="navigation-bar">
        <img src={logo} className="logo" alt="Little Lemon Logo" />
        <ul id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
    </nav>
  )
}

export default NavigationBar