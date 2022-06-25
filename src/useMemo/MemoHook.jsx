import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'
import { useCounter } from '../Hooks'


const heavyStuff = ( iteration = 200) =>{
  for(let i = 0; i < iteration; i++){
   console.log('heavyStuff');
 }
 
 return `heavyStuff ${iteration} times Done`
 }

export const MemoHook = () => {

  
 

  const [show, setShow] = useState(true)

  const {count,increment} = useCounter(1);

  const messageMemorize = useMemo( ()=> heavyStuff(count),[count]);
  
  return (
    <>
    <h1>Counter: <small>Counter: {count}</small></h1>

    <hr />
    <h4>{messageMemorize}</h4>
    <button className='btn btn-primary' onClick={() => increment()}>
    +1
    </button>
    <button type="button"  className="btn btn-outline-primary ml-2" onClick={ () => setShow(!show)} >
    show/hide {JSON.stringify(show)}
    </button>
    
    </>
  )
}




