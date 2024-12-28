import React, { Fragment, useEffect, useState } from 'react'

import Disp from './Disp';
const Counter = () => {
    
  let [count,setCount] = useState(0);
  let [time,setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        setTime(time+1);
    }, 1000);
  
    return () => {
      clearInterval(time)
    }
  }, [time])

  const stopTimer = () => {
    setTime(0);
    clearInterval(time);
  }
  return (
    <>
    <div>
      <h1 className='text-red'>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Disp text='Hello'></Disp>
      <h1>{time}</h1>
      <button onClick={stopTimer}>reset timer</button>
      
    </div>
    </>
  )
}


export default Counter;
