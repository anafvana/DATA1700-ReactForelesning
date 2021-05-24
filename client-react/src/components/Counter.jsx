import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const updater = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={updater}>Click me for counting up.</button>
      <p>{counter}</p>
    </div>
  );
};
