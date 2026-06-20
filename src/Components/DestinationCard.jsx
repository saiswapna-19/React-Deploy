import React from 'react';


export default function DestinationCard({image,name,description,price,onBook}){

  return (
    <div className="destination-card">
      <img src={image} alt={name}/>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>Price: ₹{price}</h4>
        <button onClick={()=>onBook(name)}>Book Now</button>
     </div>
    </div>
  );

}

