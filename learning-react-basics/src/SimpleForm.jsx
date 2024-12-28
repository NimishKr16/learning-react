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
  return (
    <div>
    <h1>Name:{name}</h1>  

    <form onSubmit={handleSubmit}>
        
    <input type="text" value={name} onChange={handleChange} />
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default SimpleForm
