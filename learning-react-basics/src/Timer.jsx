import React, { useEffect, useState } from 'react'

const Timer = () => {
    let [time,setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(time+1);
    }, 1000);
  
    return () => {
      clearInterval(time)
    }
  }, [time])

  const myStyle = {
    color: "white",
    backgroundColor: "purple",
    padding: "10px",
    marginTop: "20px",
  };
  
  return (
    <div style={myStyle}>
        <h1> THIS IS A LIVE TIMER COMPONENT</h1>
      <h1>{time}</h1>
    </div>
  )
}

export default Timer
