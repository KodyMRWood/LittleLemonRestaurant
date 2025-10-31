import {useReducer} from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import SeatImage from '../../Assets/restaurant.jpg'

const convertDate = function (date) {
  if (typeof date === 'string') {
    // If already in yyyy-mm-dd, convert to yyyy/mm/dd
    return date.replace(/-/g, '/');
  } else if (date instanceof Date) {
    // Format Date object as yyyy/mm/dd
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  }
  return '';
}

export function initTimes(){
  var date = convertDate(new Date());
  let dateData = JSON.parse(window.localStorage.getItem(date));
  if(dateData)
  {
    return dateData;
  }
  else{
    return fetchAPI(new Date());
  }
}

export function updateTimes(state, action) {
  var date = convertDate(new Date(action+"T00:00"));
  let dateData = JSON.parse(window.localStorage.getItem(date));
  if(dateData)
  {
    return dateData;
  }
  else{
    return fetchAPI(new Date(date));
  }
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

  let dateFormat = convertDate(date);
  window.localStorage.setItem(dateFormat,JSON.stringify(result));
  return result;
};

export const submitAPI = function (formData) {
    const datePicked = convertDate(formData.date);
    const timePicked = formData.time;

    let dateData =JSON.parse(window.localStorage.getItem(datePicked));
    if(dateData)
    {
      const index = dateData.indexOf(timePicked);
      if(index >= 0)
      {
        dateData.splice(index,1);
      }
      window.localStorage.setItem(datePicked,JSON.stringify(dateData));
    }
    else
    {
      console.log("Error: No value found on LocalStorage");
    }
    return true;
};

function BookingPage() {

    const navigate = useNavigate();
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initTimes());

    function submitForm(formData) {
        console.log(formData.date + " " + formData.time);
        if(submitAPI(formData))
        {
            navigate("/Booking-Confirmation");
        }
    };

  return (
    <main className="booking-page">
      <section className="booking-page-content">
        <h1 className="booking-title">Reserve a Table</h1>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submit={submitForm} />
        <img className="booking-image" src={SeatImage} alt="seating area on the restaurants patio"/>
      </section>
    </main>
  )
}

export default BookingPage;