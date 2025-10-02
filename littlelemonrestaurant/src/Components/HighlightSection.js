// Library Imports

// Components
import SpecialCard from './SpecialCard'




function HighlightSection() {
  return (
    <section className="highlight-section">
        <h2 className="section-title">Specials</h2>
        <button className="online-menu-button">Online Menu</button>
        <div className="special-cards-container">
          <SpecialCard></SpecialCard>
          <SpecialCard></SpecialCard>
          <SpecialCard></SpecialCard>
        </div>
    </section>
  )
}

export default HighlightSection