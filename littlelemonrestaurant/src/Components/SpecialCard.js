// Images
import greekSalad from "../Assets/greeksalad.jpg";
import dishIcon from "../Assets/Dishicon.svg";

function SpecialCard() {
    // TODO: Replace images , price and name with props
  return (
    <article className="special-card">
      <img src={greekSalad} className="special-card-image" alt="Image of the greek salad from Little Lemon" width="200px"/>
      <h3 className="special-card-name">Greek Salad</h3>
      <p className="special-card-price">$5.00</p>
      <p className="special-card-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
      <div className="special-card-spacer">
        <button className="special-card-button">Order for Delivery</button>
        <img src={dishIcon} className="special-card-order-image" alt="Small dish symbol for delivery" width="20px"/>
      </div>
    </article>
  )
}

export default SpecialCard