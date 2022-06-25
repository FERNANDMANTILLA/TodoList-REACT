import { useCounter } from '../Hooks/useCounter';


export const CounterCustomHook = () => {

    const {count,increment,decrement,reset} = useCounter(10);

  return (
    <div>
    <h1>Counter with Custom Hook : {count} {increment}</h1>
    <hr />
    <button onClick={() => increment()} className='btn'>+1</button>
    <button onClick={reset} className='btn'>RESET</button>
    <button onClick={()=> decrement()} className='btn'>-1</button>
    </div>
  );

}
