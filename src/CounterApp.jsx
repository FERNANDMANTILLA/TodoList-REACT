import { useState } from "react";

export function CounterApp() {
  const [count, setCount] = useState({
    counter1: 1,
    counter2: 5,
    counter3: 10,
  });

  const handleIncrement = (counter) => {
    setCount({ ...count, [counter]: count[counter] + 1 });
  }
  
  return (
    <div>
      <h1>Counter : {count.counter1} </h1>
      <h1>Counter : {count.counter2} </h1>
      <h1>Counter : {count.counter3} </h1>      
      <button
        className="btn btn-primary"
        onClick={() => {
          handleIncrement("counter1");
        }}>
        +1{" "}
      </button>

    </div>
  );
}
