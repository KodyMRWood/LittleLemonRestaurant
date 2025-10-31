import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const page= require('./BookingPage');
const form = require('./BookingForm')

test( 'Renders BookingForm', () => {
    render(<BrowserRouter><BookingPage></BookingPage></BrowserRouter>);
    const headingElement = screen.getByText(/Choose Date*/i);
    const initTime = page.initTimes();
    const updateTimesTest = page.updateTimes([],"2025-10-31");

    expect(headingElement).toBeInTheDocument(),
    expect(initTime.length).toBeGreaterThan(0);
    expect(updateTimesTest.length).toBeGreaterThan(0);
});

test( 'Form works properly', () => {

    const availableTimes = ["17:00", "17:30"];
    const setAvailableTimes = jest.fn();
    render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}></BookingForm>);
    const dateInput = screen.getByTestId('date');
    const timeInput = screen.getByTestId('time')
    const guestInput = screen.getByTestId('guests')
    const occasionInput = screen.getByTestId('occasion');

    //Date needs to be set for today's date for the test to work
    expect(dateInput).toBeInTheDocument(),
    expect(dateInput).toHaveAttribute('required'),
    fireEvent.change(dateInput,{target:{value:"2025-10-31"}});
    expect(dateInput.value).toEqual("2025-10-31"),


    expect(timeInput).toBeInTheDocument(),
    expect(timeInput).toHaveAttribute('required'),
    fireEvent.change(timeInput,{target:{value:"17:30"}}),
    expect(timeInput.validity.valid).toBe(true),
    expect(timeInput).toHaveValue("17:30"),
    fireEvent.change(timeInput,{target:{value:"19:00"}}),
    // This should be none since it is not in the available times above
    // So it cant actually select the value;
    expect(timeInput).toHaveValue("none"),

    expect(guestInput).toBeInTheDocument(),
    expect(guestInput).toHaveAttribute('required'),
    fireEvent.change(guestInput,{target:{value:5}}),
    expect(guestInput).toHaveValue(5),
    expect(guestInput.validity.valid).toBe(true),


    expect(occasionInput).toBeInTheDocument(),
    userEvent.selectOptions(occasionInput, 'birthday'),
    expect(occasionInput).toHaveValue('birthday')
});