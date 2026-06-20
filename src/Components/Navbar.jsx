import React from 'react';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
        <nav>
            <div className="logo">TravelGo</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    </div>
  );
}
