// Library Imports
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import {slide as Menu} from 'react-burger-menu';

//Images
import logo from "../Assets/Logo.svg";

function NavigationBar() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const mobileResolution = 768;

useEffect(()=>{
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


    return (
    <nav id="navigation-bar">
          <Link to="/">
          <img src={logo} className="logo" alt="Little Lemon Logo"/>
          </Link>
        {(windowWidth > mobileResolution) ?
        <ul id="nav-links">
            <li><Link to="/LittleLemonRestaurant">Home</Link></li>
            <li><HashLink to="/LittleLemonRestaurant#about-section">About</HashLink></li>
            <li><HashLink to="/LittleLemonRestaurant#highlight-section">Menu</HashLink></li>
            <li><Link to="/LittleLemonRestaurant/booking">Reservations</Link></li>
            <li><HashLink to="/LittleLemonRestaurant#highlight-section">Order Online</HashLink></li>
            <li><Link to="/LittleLemonRestaurant">Login</Link></li>
        </ul> :
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-Container" }right>
            <Link to="/LittleLemonRestaurant">Home</Link>
            <HashLink to="/LittleLemonRestaurant#about-section">About</HashLink>
            <HashLink to="/LittleLemonRestaurant#highlight-section">Menu</HashLink>
            <Link to="/LittleLemonRestaurant/booking">Reservations</Link>
            <HashLink to="/LittleLemonRestaurant#highlight-section">Order Online</HashLink>
            <Link to="/LittleLemonRestaurant">Login</Link>
          </Menu>
        }
    </nav>
  )
}

export default NavigationBar