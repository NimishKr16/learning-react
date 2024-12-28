import React, { Fragment, useEffect, useState } from "react";

import Disp from "./Disp";
const Counter = () => {
  let [count, setCount] = useState(0);

  let myStyle = {
    color: "red",
    backgroundColor: "black",
    padding: "10px",
  };

  let myStyle2 = {
    color: "green",
    backgroundColor: "lightblue",
    padding: "10px",
    marginTop: "20px",
  };

  return (
    <>
      <div>
        <div style={myStyle}>
          <h1>THIS IS A COUNTER COMPONENT</h1>
          <h1 className="text-red">{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <br />
          <button onClick={() => setCount(0)}>Reset to 0</button>
        </div>
        <div style={myStyle2}>
          <Disp text="Hello from Disp Component using Props"></Disp>
        </div>
      </div>
    </>
  );
};

export default Counter;
