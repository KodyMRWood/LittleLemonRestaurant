// Library Imports
import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

//Images
import logo from "../Assets/Logo.svg";

function NavigationBar() {
  return (
    <nav id="navigation-bar">
        <Link to="/">
        <img src={logo} className="logo" alt="Little Lemon Logo"/>
        </Link>
        <ul id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><HashLink to="/#about-section">About</HashLink></li>
            <li><HashLink to="/#highlight-section">Menu</HashLink></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><HashLink to="/#highlight-section">Order Online</HashLink></li>
            <li><Link to="/">Login</Link></li>
        </ul>
    </nav>
  )
}

export default NavigationBar