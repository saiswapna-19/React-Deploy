import React,{useState,useEffect} from "react";
import { Link, Outlet } from "react-router-dom";



export default function Services(){
  const [destination,setDestination] = useState([]);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [editId,setEditId] = useState(null);
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
      const travelData = data.slice(0,5).map((item)=>(
        {
          id:item.id,
          name:item.title.substring(0,20),
          price:item.id * 5000
        }
      ));
      setDestination(travelData);
    });
  },[]);
  const addItem=()=>{
    const trimmedName = name.trim();
    const trimmedPrice = price.trim();
    if(!trimmedName || !trimmedPrice)
      return;
    if(editId){

      fetch(
        `https://jsonplaceholder.typicode.com/posts/${editId}`,
        {
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          id:editId,
          name:trimmedName,
          price:trimmedPrice
        })
      })
      .then((res)=>res.json())
      .then((data)=>{
        setDestination(
          destination.map((place)=>
            place.id === editId
            ?
            {
              ...place,
              name:data.name,
              price:data.price
            }
            :
            place
          )
        );
        setEditId(null);
        setName("");
        setPrice("");
      });
    }
    else{
      fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:trimmedName,
          price:trimmedPrice
        })
      })
      .then((res)=>res.json())
      .then((data)=>{
        const newDestination={
          id:destination.length+1,
          name:data.name,
          price:data.price
        };
        setDestination([
          ...destination,
          newDestination
        ]);
        setName("");
        setPrice("");
      });
    }
  };
  const handleDelete=(id)=>{
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
      method:"DELETE"
      }
    )
    .then(()=>{
      setDestination(
        destination.filter(
          (place)=>place.id !== id
        )
      );
    });
  };
  const handleEdit=(place)=>{
    setEditId(place.id);
    setName(place.name);
    setPrice(place.price);
  };
  return(
    <div>
      <h1 className="travelservices">Travel Services</h1>
      <table className="table">
        <thead>
          <tr>
            <td>S.No</td>
            <td>Destination</td>
            <td>Price</td>
            <td>Option</td>
          </tr>
        </thead>
        <tbody>
        {
        destination.map((place)=>(
          <tr key={place.id}>
            <td>{place.id}</td>
            <td>{place.name}</td>
            <td>₹{place.price}</td>
            <td>
            <button className="edit-btn" onClick={()=>handleEdit(place)}>Edit</button>
            <button className="delete-btn" onClick={()=>handleDelete(place.id)}>Delete</button>
            </td>
          </tr>
        ))
        }
        </tbody>
      </table>
      <div className="form">
        <label>Destination</label>
        <input
        type="text"
        value={name}
        placeholder="Enter destination"
        onChange={(e)=>setName(e.target.value)}/>
        <label>Price</label>
        <input
        type="number"
        value={price}
        placeholder="Enter price"
        onChange={(e)=>setPrice(e.target.value)}/>
        <button className="add-btn" onClick={addItem}>{editId?"Update":"Add"}</button>
      </div>
      <Outlet />
    </div>
  );
}
