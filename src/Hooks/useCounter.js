import { useState } from "react";

export function useCounter(value = 10) {

  const [count, setCount] = useState(value);

  const increment = (value = 1) => { setCount( (v) => v+value)};
  
  const decrement = () => {
    if (count == 0) return count;
    setCount(count - 1);
  };
  
  const reset = () => setCount(value);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export function setCounter(value) {
  setCount(value);
}
