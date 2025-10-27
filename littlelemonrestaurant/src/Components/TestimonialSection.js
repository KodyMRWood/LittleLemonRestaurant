// Components
import Testimonial from './Testimonial'
import NextArrow from '../Assets/next-arrow.svg'
import ScrollButtons from './ScrollButtons'

function TestimonialSection() {
  return (
    <section id="testimonial-section">
      <h2 className="section-title">Testimonials</h2>
      <ScrollButtons></ScrollButtons>
        <div className="testimonial-cards-container">
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
        </div>
    </section>
  )
}

export default TestimonialSection