import React from "react";
import DestinationCard from "../Components/DestinationCard";

export default function Hotels() {
  const hotels = [
    {
      id:1,
      name:"Burj Al Arab Dubai",
      location:"Dubai",
      price:15000,
      rating:"5 Star"
    },
    {
      id:2,
      name:"Taj Hotel",
      location:"Mumbai",
      price:12000,
      rating:"5 Star"
    },
    {
      id:3,
      name:"Maldives Beach Resort",
      location:"Maldives",
      price:20000,
      rating:"4 Star"
    }
  ];
  const handleBooking=(hotelName)=>{
    alert(`Hotel booking started for ${hotelName}`);
  };
  return (
    <div className="service-page">
      <h2>Hotel Booking Services</h2>
      <p>Book luxury hotels and comfortable stays for your journey.</p>
      <div className="cards">
        {
        hotels.map((hotel)=>(
        <DestinationCard
            key={hotel.id}
            name={hotel.name}
            description={`${hotel.location} - ${hotel.rating}`}
            price={hotel.price}
            onBook={handleBooking}
        />
        ))
        }
      </div>
    </div>
  );

}