import React,{useState} from 'react';

export default function Contact() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  });
  const[error,setError]=useState({});
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
  });
  };
  const validate=()=>{
    let newErrors={};
    if(formData.name.trim()===""){
      newErrors.name="Name is required";
    }else if(formData.name.length<3){
      newErrors.name="minimum 3 characters required";
    
    }
    if(formData.email.trim()===""){
      newErrors.email="email is required";
    }else if(!formData.email.includes("@")){
      newErrors.email="invalid email format";
    }
    if(formData.message.trim()===""){
      newErrors.message="message is required";
    }
    setError(newErrors);
    return Object.keys(newErrors).length===0;
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(validate()){
      alert("Form submitted successfully");
      setFormData({name:"",email:"",message:""});
    }
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name} 
          onChange={handleChange}
          required 
          />
        <p>{error.name}</p>
        <input
        type="email"
        name="email"
        placeholder="enter your email"
        value={formData.email}
        onChange={handleChange}
        required
         />
        <p>{error.email}</p>
         <textarea
         name="message"
         rows="5"
         placeholder="enter message"
         value={formData.message}
         onChange={handleChange}
         />
        <p>{error.message}</p>
         <button type="submit">Send</button>
      </form>
    </div>
  );
}
