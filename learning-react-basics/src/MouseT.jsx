import React, { useState } from 'react'

const MouseT = ({render}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  
    return (
        <>
        <h1>A MOUSE COORDINATE TRACKER</h1>
        <div onMouseMove={handleMouseMove}>{render(position)}</div>
        </>
    ) 
}

export default MouseT
