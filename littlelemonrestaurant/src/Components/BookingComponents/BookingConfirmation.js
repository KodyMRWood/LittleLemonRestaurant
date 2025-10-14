import { Link } from "react-router-dom"

function BookingConfirmation() {
  return (
    <main> Your Booking has been Confirmed! See you soon!
        <button><Link to="/">Return to HomePage</Link></button>
    </main>
  )
}

export default BookingConfirmation