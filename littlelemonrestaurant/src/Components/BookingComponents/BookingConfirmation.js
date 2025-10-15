import { useNavigate } from "react-router";

function BookingConfirmation() {
  const navigate = useNavigate();
  return (
    <main> Your Booking has been Confirmed! See you soon!
        <button onClick={()=>navigate('/')}>Home</button>
    </main>
  )
}

export default BookingConfirmation