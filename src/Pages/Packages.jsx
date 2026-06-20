import React from "react";
import DestinationCard from "../Components/DestinationCard";

export default function Packages() {
  const packages = [
    {
      id:1,
      name:"Dubai Luxury Package",
      days:"5 Days / 4 Nights",
      price:60000,
      description:"Includes hotel stay, city tour and desert safari"
    },
    {
      id:2,
      name:"Paris Romantic Package",
      days:"7 Days / 6 Nights",
      price:85000,
      description:"Includes hotel, sightseeing and Eiffel Tower visit"
    },
    {
      id:3,
      name:"Maldives Holiday Package",
      days:"4 Days / 3 Nights",
      price:75000,
      description:"Beach resort stay with water activities"
    }
  ];
  const handleBooking=(packageName)=>{
    alert( `Package booking started for ${packageName}`);
  };
  return (
    <div className="service-page">
      <h2>Travel Packages</h2>
      <p>Choose the best travel packages for your dream vacation.</p>
      <div className="cards">
      {
      packages.map((item)=>(
        <DestinationCard
            key={item.id}
            name={item.name}
            description={`${item.days} - ${item.description}`}
            price={item.price}
            onBook={handleBooking}
        />
      ))
      }
      </div>
    </div>
  );

}