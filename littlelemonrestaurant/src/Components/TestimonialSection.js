// Library Imports
import {useRef, useState} from 'react'

// Components
import Testimonial from './Testimonial'
import ScrollButtons from './ScrollButtons'


const cardWidth =  (window.screen.width <= 768)? 320 : 500;
const numOfTestimonial =  4;

function TestimonialSection() {

    function clamp(num, lower, upper) {
      return Math.min(Math.max(num, lower), upper);
    }
  
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();
  
    const handleScroll = (scrollAmount) =>
    {
      const newScrollPosition =  clamp(scrollPosition + scrollAmount, 0 , cardWidth*(numOfTestimonial-1));
      setScrollPosition(newScrollPosition);
      containerRef.current.scrollLeft = newScrollPosition;
    }

  return (
    <section id="testimonial-section">
      <h2 className="section-title">Testimonials</h2>
      <ScrollButtons handleScroll={handleScroll} cardWidth={cardWidth}></ScrollButtons>
        <div className="testimonial-cards-container" ref={containerRef}>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
        </div>
    </section>
  )
}

export default TestimonialSection