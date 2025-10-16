// Library Imports

// Images

// Imported Components
import {Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingComponents/BookingPage';
import BookingConfirmation from './Components/BookingComponents/BookingConfirmation';

// CSS
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/booking" element={<BookingPage></BookingPage>} />
        <Route path="/booking-confirmation" element={<BookingConfirmation></BookingConfirmation>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
