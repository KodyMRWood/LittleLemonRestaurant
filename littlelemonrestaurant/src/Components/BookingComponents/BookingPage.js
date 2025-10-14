import {useEffect, useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router';


export function initTimes(){
        const times = fetchAPI(new Date());
        return times;
}

export function updateTimes(state, action) {
    return fetchAPI(new Date(action));
}

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

export const submitAPI = function (formData) {
    console.log(formData.get('res-date'));
    return true;
};

function BookingPage() {

    const navigate = useNavigate();
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initTimes());

    function submitForm(event, formData) {
        if(submitAPI(formData))
        {
            event.preventDefault();
            navigate("/Booking-Confirmation");
        }
    };

  return (
    <main>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submit={submitForm} />
    </main>
  )
}

export default BookingPage;