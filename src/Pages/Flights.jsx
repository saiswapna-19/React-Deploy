import React from "react";
import DestinationCard from "../Components/DestinationCard";

export default function Flights() {
  const flights = [
    {
      id:1,
      name:"Hyderabad to Dubai",
      duration:"4 Hours",
      price:25000
    },

    {
      id:2,
      name:"Delhi to Paris",
      duration:"8 Hours",
      price:45000
    },

    {
      id:3,
      name:"Mumbai to Maldives",
      duration:"5 Hours",
      price:30000
    }

  ];

  return (
    <div className="service-page">
      <h2>Flight Booking Services</h2>
      <p>Book comfortable flights to your favourite destinations.</p>
      <div className="cards">
      {
      flights.map((flight)=>(
        <DestinationCard
            key={flight.id}
            name={flight.name}
            description={`Duration: ${flight.duration}`}
            price={flight.price}
            onBook={handleBook}
        />
      ))
      }
      </div>
    </div>
  );

}