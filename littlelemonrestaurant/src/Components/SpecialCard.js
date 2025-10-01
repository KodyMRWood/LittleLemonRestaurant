// Images
import greekSalad from "../Assets/greeksalad.jpg";
import dishIcon from "../Assets/Dishicon.svg";

function SpecialCard() {
    // TODO: Replace images , price and name with props
  return (
    <article className="special-card">
        <img src={greekSalad} className="" alt="Image of the greek salad from Little Lemon" width="200px"/>            <h3>Greek Salad</h3>
        <p>$5.00</p>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <button>Order for Delivery</button>
       <img src={dishIcon} className="" alt="Small dish symbol for delivery" width="20px"/>
    </article>
  )
}

export default SpecialCard