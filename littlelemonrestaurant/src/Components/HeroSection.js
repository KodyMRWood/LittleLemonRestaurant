// Library Imports

// Images
import heroImage from "../Assets/restaurantchefB.jpg";


function HeroSection() {
  return (
    <section id="hero-section">
      <div className="hero-title">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </div>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={heroImage} className="hero-image" alt="Image of chef playing garnish on top plate of food"/>
        <div className="reserve-button-container">
          <button className='reserve-button'>Reserve a Table</button>
        </div>

    </section>
  )
}

export default HeroSection