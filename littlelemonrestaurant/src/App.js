// Library Imports

// Images

// Imported Components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingComponents/BookingPage';

// CSS
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Homepage></Homepage>} />
        <Route path="/booking" exact element={<BookingPage></BookingPage>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
