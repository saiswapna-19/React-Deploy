import React, { useEffect, useState } from "react";


export default function About() {
  const [message, setMessage] = useState("");
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    setMessage(
      "Welcome to TravelGo - Your trusted online travel booking partner"
    );
  }, []);
  return (
    <div className="about">
      <h1>About TravelGo</h1>
      <h3>{message}</h3>
      <p>TravelGo helps customers book flights, hotels,and holiday packages easily from anywhere.</p>
      {
        showMore &&
        <div >
          <h3 id="services"> Our Services</h3>
          <ul>
            <li>Flight Booking</li>
            <li>Hotel Reservation</li>
            <li>Holiday Packages</li>
            <li>Travel Support</li>
          </ul>
        </div>
      }
      <button onClick={()=> setShowMore(!showMore)}>
        { showMore ?"Show Less":"Learn More"}
      </button>
    </div>
  );

}
