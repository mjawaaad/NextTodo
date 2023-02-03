"use client";
import React, { useState } from "react";

export default function CounterAppAdvance() {
  const [counter, setCounter] = useState(0);
  const decrement = (kitna = 1) => {
    setCounter(counter - kitna);
  };
  const increment = (kitna = 1) => {
    setCounter(counter + kitna);
  };
  return (
    <>
      <button onClick={() => decrement(3)}>Decrement by 3</button>
      <button onClick={() => decrement(2)}>Decrement by 2</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      {counter}
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => increment(2)}>Increment by 2</button>
      <button onClick={() => increment(3)}>Increment by 3</button>
    </>
  );
}
