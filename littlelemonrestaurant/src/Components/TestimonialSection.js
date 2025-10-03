// Components
import Testimonial from './Testimonial'

function TestimonialSection() {
  return (
    <section id="testimonial-section">
      <h2 className="section-title">Testimonials</h2>
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