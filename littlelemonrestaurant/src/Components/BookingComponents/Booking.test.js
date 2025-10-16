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
    const updateTimesTest = page.updateTimes([],"2025-10-16");

    expect(headingElement).toBeInTheDocument(),
    expect(initTime.length).toBeGreaterThan(0);
    expect(updateTimesTest.length).toBeGreaterThan(0);
});

test( 'Form works properly', () => {

    const availableTimes = ["17:00", "17:30"];
    const setAvailableTimes = jest.fn();
    render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}></BookingForm>);
    const dateInput = screen.getByTestId('res-date');
    const timeInput = screen.getByTestId('res-time')
    const guestInput = screen.getByTestId('guests')
    const occasionInput = screen.getByTestId('occasion');

    expect(dateInput).toBeInTheDocument(),
    expect(dateInput).toHaveAttribute('required'),
    expect(dateInput).toHaveAttribute('min', "2025-10-16"),
    fireEvent.change(dateInput,{target:{value:"2025-10-16"}});
    expect(dateInput.value).toEqual("2025-10-16"),
    fireEvent.change(dateInput,{target:{value:"2025-10-10"}});
    expect(dateInput.validity.rangeUnderflow).toBe(true);


    expect(timeInput).toBeInTheDocument(),
    expect(timeInput).toHaveAttribute('required'),
    expect(timeInput).toHaveAttribute('min',"17:00"),
    fireEvent.change(timeInput,{target:{value:"17:30"}}),
    expect(timeInput.validity.valid).toBe(true),
    expect(timeInput).toHaveValue("17:30"),
    fireEvent.change(timeInput,{target:{value:"19:00"}}),
    // This should be none since it is not in the available times above
    // So it cant actually select the value;
    expect(timeInput).toHaveValue("none"),
    
    expect(guestInput).toBeInTheDocument(),
    expect(guestInput).toHaveAttribute('required'),
    expect(guestInput).toHaveAttribute('min','1'),
    expect(guestInput).toHaveAttribute('max', '10'),
    fireEvent.change(guestInput,{target:{value:5}}),
    expect(guestInput).toHaveValue(5),
    expect(guestInput.validity.valid).toBe(true),
    fireEvent.change(guestInput,{target:{value:0}}),
    expect(guestInput.validity.rangeUnderflow).toBe(true),
    fireEvent.change(guestInput,{target:{value:30}}),
    expect(guestInput.validity.rangeOverflow).toBe(true),
    
    
    expect(occasionInput).toBeInTheDocument(),
    userEvent.selectOptions(occasionInput, 'birthday'),
    expect(occasionInput).toHaveValue('birthday')
});