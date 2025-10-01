// Library Imports
import React from 'react'

// Images
import logo from "../Assets/Logo.svg";
import facebookIcon from "../Assets/facebookIcon.svg";
import instagramIcon from "../Assets/instagramIcon.svg";
import twitterIcon from "../Assets/xTwitterIcon.svg";

function Footer() {
  return (
    <footer>
        <img src={logo} alt="Little Lemon Logo" className=""/>
        <ul> Doormat Navigation
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderOnline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>

        <ul> Contact
            <li>123 FakeAddress Avenue</li>
            <li><a href="tel:5555555555">phone number</a></li>
            <li><a href="mailto:fake@email.com">email</a></li>
        </ul>

        <ul> Social Media
            <li><a href=""><img src={facebookIcon} alt="Facebook logo as a button" className="" width={"40px"}/> </a></li>
            <li><a href=""><img src={instagramIcon} alt="Instagram logo as a button" className="" width={"40px"}/> </a></li>
            <li><a href=""><img src={twitterIcon} alt="X / Twitter logo as a button" className="" width={"40px"}/> </a></li>
        </ul>
    </footer>
  )
}

export default Footer