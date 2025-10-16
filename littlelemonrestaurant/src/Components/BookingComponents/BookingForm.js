import  { useState } from 'react'

// Getting todays date and time
const today = new Date()
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(today.getDate()).padStart(2, '0');
const todayFormatted = `${year}-${month}-${day}`;

const currentTime = today.getHours()+ ":" + today.getMinutes();


function BookingForm(props) {
    const [date, setDate] = useState(todayFormatted);
    const [time, setTime] = useState('none');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('none');


    const [dateChanged, setDateChanged] = useState(false);
    const [timeChanged, setTimeChanged] = useState(false);
    const [guestsChanged, setGuestsChanged] = useState(false);

    function handleDateChange(e){
        setDate(e.target.value);
        props.setAvailableTimes(e.target.value);
        setDateChanged(true);
    }
    
    function handleTimeChange(e)
    {
        setTime(e.target.value);
        setTimeChanged(true);
    }

    function handleGuestsChange(e)
    {
        setGuests(e.target.value);
        setGuestsChanged(true);
    }

  return (

    <form onSubmit={(e) => e.preventDefault()} id="BookingForm">
        <label htmlFor="res-date">Choose date*</label>
        <input type="date" id="res-date" data-testid="res-date" name="res-date" value={date} onChange={handleDateChange} min={todayFormatted} required/>

        <label htmlFor="res-time">Choose time*</label>
        <select id="res-time" data-testid="res-time" name="res-time" value={time} min="17:00" onChange={handleTimeChange} required>
            <option value="none">Pick a Time</option>
            {props.availableTimes.map((time) => (currentTime < time) ? <option key={time} value={time}>{time}</option> : false)}
        </select>

        <label htmlFor="guests">Number of guests*</label>
        <input type="number" placeholder='1' min="1" max="10" id="guests" data-testid="guests" name="guests" value={guests} onChange={handleGuestsChange} required/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" data-testid="occasion" name="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="promotion">Promotion</option>
        </select>

        <button type="submit" value="Confirm Reservation" disabled={!(timeChanged)} onClick={(e) => {props.submit(e,new FormData(document.forms.BookingForm))}}>Confirm Reservation</button>
    </form>
  )
}

export default BookingForm