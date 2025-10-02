// Library Imports
import React from 'react'

//Images
import logo from "../Assets/Logo.svg";

function NavigationBar() {
  return (
    <nav id="navigation-bar">
        <img src={logo} className="logo" alt="Little Lemon Logo" />
        <ul id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderOnline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </nav>
  )
}

export default NavigationBar