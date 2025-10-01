// Library Imports
import React from 'react'

// Images
import heroImage from "../Assets/restaurantchefB.jpg";


function HeroSection() {
  return (
    <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>

        <img src={heroImage} className="" alt="Image of chef playing garnish on top plate of food" width="200px"/>
    </section>
  )
}

export default HeroSection