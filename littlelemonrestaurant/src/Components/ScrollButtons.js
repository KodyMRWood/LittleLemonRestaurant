function ScrollButtons(props) {
  return (
    <div className="scroll-buttons">
        <button className='prev' onClick={()=>{props.handleScroll(-props.cardWidth)}}></button>
        <button className='next' onClick={()=>{props.handleScroll(props.cardWidth)}}></button>
    </div>
  )
}

export default ScrollButtons