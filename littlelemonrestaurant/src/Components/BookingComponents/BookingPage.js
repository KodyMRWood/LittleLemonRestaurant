import {useReducer} from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router';

const convertDate = function (date)
{ 
  return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
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
    const datePicked = convertDate(new Date(formData.get('res-date')+"T00:00"));
    const timePicked = formData.get('res-time');

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