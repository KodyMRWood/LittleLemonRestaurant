import  { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Getting todays date and time
const today = new Date()
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(today.getDate()).padStart(2, '0');
const todayFormatted = `${year}-${month}-${day}`;

const currentTime = today.getHours()+ ":" + today.getMinutes();


//Validation Schema
const validationSchema = Yup.object({
       guests: Yup.number()
        .min(1, 'Must be at least 1')
        .max(10, 'Must be 10 or less')
        .required('Required'),
       date: Yup.date()
        .min(todayFormatted, 'Date cannot be in the past')
        .required('Required'),
       time: Yup.string()
        .notOneOf(['none'], 'Please select a time')  
        .required('Required'),
     })


function BookingForm(props) {

    const formik = useFormik({
     initialValues: {
       guests: 1,
       date: todayFormatted,
       time: '',
       occasion: 'none'
     },
     validationSchema: validationSchema,
     onSubmit: values => {
        props.submit(values,new FormData(document.forms.BookingForm))
        alert(JSON.stringify(values, null, 2));
     },
   });

    function handleDateChange(e){
        formik.handleChange(e);
        props.setAvailableTimes(e.target.value);
    }

  return (
    <form onSubmit={formik.handleSubmit} id="BookingForm">
        <fieldset>
        <label htmlFor="guests">Number of guests*</label>
            <input className="form-guest form-input" type="number" id="guests" data-testid="guests" name="guests" value={formik.values.guests} onChange={formik.handleChange} onBlur={formik.handleBlur } required/>
            {formik.touched.guests && formik.errors.guests ? (
                <div className="error">{formik.errors.guests}</div>
            ) : null}
        </fieldset>

        <fieldset>
            <label htmlFor="date">Choose date*</label>
            <input className="form-date form-input" type="date" id="date" data-testid="date" name="date" value={formik.values.date} onChange= {handleDateChange} onBlur={formik.handleBlur } required/>
            {formik.touched.date && formik.errors.date ? (
             <div className="error">{formik.errors.date}</div>
                   ) : null}
        </fieldset>

        <fieldset>
            <label htmlFor="time">Choose time*</label>
            <select className="form-time form-input" id="time" data-testid="time" name="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur} required>
                <option value="none">Pick a Time</option>
                {props.availableTimes.map((time) => (currentTime < time) ? <option key={time} value={time}>{time}</option> : false)}
            </select>
            {formik.touched.time && formik.errors.time ? (
             <div className="error">{formik.errors.time}</div>
                   ) : null}
        </fieldset>

        <fieldset>
            <label htmlFor="occasion">Occasion</label>
            <select className="form-occasion form-input" id="occasion" data-testid="occasion" name="occasion" value={formik.values.occasion} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="none">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="promotion">Promotion</option>
            </select>
        </fieldset>

        <button className="form-submit form-input" type="submit" value="Confirm Reservation">Confirm Reservation</button>
    </form>
  )
}

export default BookingForm