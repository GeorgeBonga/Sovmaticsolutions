import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import './index.css';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import ContactUs from './Components/ContactUs';
import Portfolio from './pages/Portfolio';


function App() {
 
  return (
    <>
      <Router>
      
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Contactus" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
       
      </Router>
    </>
  );
}


export default App;
