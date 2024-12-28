import React, { useState } from 'react'

const SimpleForm = () => {
    const [name,setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted: ${name}`);

        
    }   

    const handleChange = (e) => {
        e.preventDefault();

        setName(e.target.value);


    }

    const myStyle = {
        color: "red",
        backgroundColor: "pink",
        padding: "10px",
        marginTop: "20px",
    }
  return (
    <div style={myStyle}>
        <h1>THIS IS A SIMPLE FORM COMPONENT MADE USING USESTATE</h1>
    <h1>Name:{name}</h1>  

    <form onSubmit={handleSubmit}>
        
    <input type="text" onChange={handleChange} />
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default SimpleForm
