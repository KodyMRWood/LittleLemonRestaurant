import userPic from "../Assets/userIcon.svg";

function Testimonial() {
  return (
    <article className="testimonial">
        <img src={userPic} className="testimonial-image" alt="Image of customer who left this review" width="20px"/>
        <p className="testimonial-name">Name</p>
        <p className="testimonial-rating">Rating</p>
        <p className="testimonial-description">Review of the food</p>
    </article>
  )
}

export default Testimonial