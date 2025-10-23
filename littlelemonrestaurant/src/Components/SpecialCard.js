// Images

import dishIcon from "../Assets/Dishicon.svg";


function SpecialCard(props) {
  return (
    <article className="special-card">
      <img src={props.image} className="special-card-image" alt="Image of the greek salad from Little Lemon"/>
      <h3 className="special-card-name">{props.name}</h3>
      <p className="special-card-price">${props.price}</p>
      <p className="special-card-description">{props.description}</p>
      <div className="special-card-spacer">
        <button className="special-card-button">Order Delivery</button>
        <img src={dishIcon} className="special-card-order-image" alt="Small dish symbol for delivery"/>
      </div>
    </article>
  )
}

export default SpecialCard