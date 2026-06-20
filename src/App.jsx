import React from 'react';
import Footer from './Components/Footer';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";

import Flights from "./Pages/Flights";
import Hotels from "./Pages/Hotels";
import Packages from "./Pages/Packages";

import "./index.css";

export default function App() {
  return (

    <UserProvider>
      <BrowserRouter>
        <div className="app">
          <h1 className="heading">Online Travel Booking & Management System</h1>

          <Navbar />
          
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/services" element={<Services />}>
                <Route path="flights" element={<Flights />} />
                <Route path="hotels" element={<Hotels />} />
                <Route path="packages" element={<Packages />} />
              </Route>
            </Routes>
          </div>
          <Footer />
       </div>
      </BrowserRouter>
    </UserProvider>
  
  );
}

