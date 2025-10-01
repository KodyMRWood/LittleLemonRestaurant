import userPic from "../Assets/userIcon.svg";

function Testimonial() {
  return (
    <article className="testimonial">
        <img src={userPic} className="" alt="Image of customer who left this review" width="20px"/>
        <p>Name</p>
        <p>Rating</p>
        <p>Review of the food</p>
    </article>
  )
}

export default Testimonial