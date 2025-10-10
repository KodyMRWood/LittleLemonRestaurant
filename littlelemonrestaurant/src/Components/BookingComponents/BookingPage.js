import { useReducer, useState } from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

export function initTimes(){
        const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        return times;
}


export function updateTimes(state, action) {
        switch(action)
        {
            case "2025-10-10":
                return ["17:00", "18:00"];
            case "2025-10-11":
                return ["17:00", "18:00", "19:00", "20:00"];
            default:
                return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        }
}

function BookingPage() {
     const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initTimes());

  return (
    <main>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    </main>
  )
}

export default BookingPage;