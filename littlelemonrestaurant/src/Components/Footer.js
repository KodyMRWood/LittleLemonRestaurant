// Library Imports
import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Images
import logo from "../Assets/Logo.svg";
import facebookIcon from "../Assets/facebookIcon.svg";
import instagramIcon from "../Assets/instagramIcon.svg";
import twitterIcon from "../Assets/xTwitterIcon.svg";

function Footer() {
  return (
    <footer>
        <Link to="/">
            <img src={logo} className="logo" alt="Little Lemon Logo"/>
        </Link>
        <div className="footer-lists-container">
          <ul> <span>Navigation</span>
                <li><Link to="/">Home</Link></li>
                <li><HashLink to="/#about-section">About</HashLink></li>
                <li><HashLink to="/#highlight-section">Menu</HashLink></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><HashLink to="/#highlight-section">Order Online</HashLink></li>
                <li><Link to="/">Login</Link></li>
          </ul>
          <ul> <span>Contact</span>
              <li>123 FakeAddress Avenue</li>
              <li><a href="tel:5555555555">555 555 5555</a></li>
              <li><a href="mailto:fake@email.com">email</a></li>
          </ul>
          <ul> <span>Social Media</span>
              <li><a href=""><img src={facebookIcon} alt="Facebook logo as a button" className="" width={"40px"}/> </a></li>
              <li><a href=""><img src={instagramIcon} alt="Instagram logo as a button" className="" width={"40px"}/> </a></li>
              <li><a href=""><img src={twitterIcon} alt="X / Twitter logo as a button" className="" width={"40px"}/> </a></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer