import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom';

const page= require('./BookingPage');

test( 'Renders BookingForm', () => {
    render(<BrowserRouter><BookingPage></BookingPage></BrowserRouter>);
    const headingElement = screen.getByText(/Choose Date*/i);
    const initTime = page.initTimes();
    const updateTimesTest = page.updateTimes([],"2025-10-16");

    expect(headingElement).toBeInTheDocument(),
    expect(initTime.length).toBeGreaterThan(0);
    expect(updateTimesTest.length).toBeGreaterThan(0);
});