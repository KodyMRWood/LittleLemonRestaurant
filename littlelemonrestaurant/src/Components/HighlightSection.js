// Library Imports

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

function HighlightSection() {
  return (
    <section id="highlight-section" className="highlight-section">
        <ScrollButtons className=""></ScrollButtons>
        <h2 className="section-title">Specials</h2>
        <button className="online-menu-button">Online Menu</button>
        <div className="special-cards-container"> 
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