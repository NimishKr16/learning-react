import React, { useMemo, useState } from "react";

const calc = (num) => {
  console.log("calculating...");
  return num * 2;
};

const Memo = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => calc(count), [count]);
  return (
    <div>
      <p>Result : {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Memo;
