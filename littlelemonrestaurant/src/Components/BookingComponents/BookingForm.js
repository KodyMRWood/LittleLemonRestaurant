import React, { useState } from 'react'


function BookingForm(props) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('none');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('none');

    function handleDateChange(e){
        setDate(e.target.value);
        props.setAvailableTimes(e.target.value);
    }

  return (

    <form onSubmit={(e) => e.preventDefault()} id="BookingForm">
        <label htmlFor="res-date">Choose date*</label>
        <input type="date" id="res-date" name="res-date" onChange={handleDateChange} required/>

        <label htmlFor="res-time">Choose time*</label>
        <select id="res-time" name="res-time" onChange={(e)=> setTime(e.target.value)} required>
            <option value="none">Pick a Time</option>
            {props.availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
        </select>

        <label htmlFor="guests">Number of guests*</label>
        <input type="number" placeholder='1' min="1" max="10" id="guests" name="guests" onChange={(e)=> setGuests(e.target.value)} required/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" onChange={(e)=> setOccasion(e.target.value)}>
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="promotion">Promotion</option>
        </select>

        <button type="submit" value="Confirm Reservation" onClick={(e) => {props.submit(e,new FormData(document.forms.BookingForm))}}>Confirm Reservation</button>
    </form>
  )
}

export default BookingForm