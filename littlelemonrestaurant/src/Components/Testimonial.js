import userPic from "../Assets/userIcon.svg";

function Testimonial() {
  return (
    <article className="testimonial">
        <img src={userPic} className="testimonial-image" alt="Image of customer who left this review"/>
        <h4 className="testimonial-name">Name</h4>
        <p className="testimonial-rating">4.5/5</p>
        <p className="testimonial-description">Review of the food</p>
    </article>
  )
}

export default Testimonial