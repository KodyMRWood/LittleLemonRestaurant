// Library Imports
import {useRef, useState} from 'react'
// Components
import SpecialCard from './SpecialCard'

import greekSalad from "../Assets/greeksalad.jpg";
import bruchetta from "../Assets/bruchetta.svg";
import lemonDessert from "../Assets/lemondessert.jpg";
import ScrollButtons from './ScrollButtons';


const menuData = [
  {
    name:"Greek Salad",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price:5.00,
    image:greekSalad
  },
  {
    name:"Bruchetta",
    description:"A classic Italian antipasto, our Bruschetta features toasted artisan bread topped with a vibrant mix of ripe tomatoes, fresh basil, garlic, and a drizzle of extra virgin olive oil.",
    price:10.00,
    image:bruchetta
  },
  {
    name:"Lemon Dessert",
    description:"A light and zesty lemon cake. Made with a buttery, flaky crust and a silky lemon cream filling, this refreshing dessert is finished with a dusting of powdered sugar.",
    price:7.50,
    image:lemonDessert
  }
]

const cardWidth =  (window.screen.width <= 768)? 320 : 500;

function HighlightSection() {

  function clamp(num, lower, upper) {
    return Math.min(Math.max(num, lower), upper);
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) =>
  {
    const newScrollPosition =  clamp(scrollPosition + scrollAmount, 0 , cardWidth*(menuData.length-1));
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  }
  return (
    <section id="highlight-section" className="highlight-section">
        <ScrollButtons className="" handleScroll={handleScroll} cardWidth={cardWidth}></ScrollButtons>
        <h2 className="section-title">Specials</h2>
        <button className="online-menu-button">Online Menu</button>
        <div className="special-cards-container" ref={containerRef}>
          {menuData.map((data)=>
          <SpecialCard name={data.name}
          description={data.description}
          price={data.price}
          image={data.image}
          key={data.name}>
          </SpecialCard>)}
        </div>
    </section>
  )
}

export default HighlightSection