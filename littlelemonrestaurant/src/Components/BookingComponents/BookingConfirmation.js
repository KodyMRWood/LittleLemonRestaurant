import { useNavigate } from "react-router";
import  ConfirmImage from "../../Assets/restaurantfood.jpg"

function BookingConfirmation() {
  const navigate = useNavigate();
  return (
    <main> 
      <section className="confirm-section">
        <h1 className="confirm-title">
          Booking Confirmed! 
        </h1>
        <p className="confirm-paragraph">
          Thank you for choosing to dine with us. We look forward to seeing you soon!
        </p>
        <img className="confirm-image" src={ConfirmImage}></img>
        <button className="return-home" onClick={()=>navigate('/')}>Return Home</button>
      </section>
    </main>
  )
}

export default BookingConfirmation