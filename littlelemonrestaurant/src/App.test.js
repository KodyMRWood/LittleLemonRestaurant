import { render, screen } from '@testing-library/react';
import BookingPage from './Components/BookingComponents/BookingPage';

const page= require('./Components/BookingComponents/BookingPage');

test( 'Renders BookingForm', () => {
    render(<BookingPage></BookingPage>);
    const headingElement = screen.getByText(/Choose Date*/i);
    const initTime = page.initTimes();
    const updateTimesTest = page.updateTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], "2025-10-10");

    expect(headingElement).toBeInTheDocument(),
    expect(initTime).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    expect(updateTimesTest).toEqual(["17:00", "18:00"]);
});