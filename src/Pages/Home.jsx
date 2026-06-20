import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import DestinationCard from "../Components/DestinationCard";


export default function Home() {


  const [destination, setDestination] = useState("");
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const destinations = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600",
      name: "Dubai",
      description: "Luxury hotels, shopping and adventure",
      price: 50000
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
      name: "Paris",
      description: "City of love and beautiful places",
      price: 70000
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600",
      name: "Maldives",
      description: "Beach vacation and relaxation",
      price: 90000
    }
  ];
  const handleSearch = () => {
    if(destination.trim() === "") {
      inputRef.current.focus();
      return;
    }
    setSearchParams({
      place: destination
    });
  };
  const handleBooking=(name)=>{
    alert(`Booking started for ${name}`);
  };
  const searchValue = searchParams.get("place") || "";
  const filteredDestinations = destinations.filter((place)=>

    place.name
    .toLowerCase()
    .includes(searchValue.toLowerCase())

  );


  return (
    <div className="home">
      <section className="hero">
        <h1>Explore The World With Ease</h1>
        <p>Book flights, hotels and travel packages at best prices</p>
        <div className="search-box">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search destination"
            value={destination}
            onChange={(e)=>setDestination(e.target.value)
            }
          />
          <button onClick={handleSearch}> Explore</button>
        </div>
        {
          searchValue &&
          <h3>Searching for:{searchValue}</h3>
        }
      </section>
        <section className="destinations">
        <h2>
          Popular Destinations
        </h2>
        <div className="cards">
          {
            filteredDestinations.length>0?(
            filteredDestinations.map((place)=>(
              <DestinationCard
                key={place.id}
                image={place.image}
                name={place.name}
                description={place.description}
                price={place.price}
                onBook={handleBooking}
              />
            ))
          ):(<h3>No destination found</h3>)
          }
        </div>
      </section>
    </div>
  );

}
