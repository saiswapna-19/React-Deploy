import React from "react";
import { Link } from "react-router-dom";

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <Link to="/help">Help Center</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Instagram | Facebook | Twitter</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelGo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}