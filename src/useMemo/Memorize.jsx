import React from 'react'
import { useState } from 'react'
import { useCounter } from '../Hooks'
import {Small} from './Small'
export const Memorize = () => {

    const [show, setShow] = useState(true)
  const {count,increment} = useCounter(1);

  return (
    <>
    <h1>Counter: <Small count={count}>  </Small></h1>

    <hr />

    <button className='btn btn-primary' onClick={() => increment()}>
    +1
    </button>
    <button type="button"  className="btn btn-outline-primary ml-2" onClick={ () => setShow(!show)} >
    show/hide {JSON.stringify(show)}
    </button>
    
    </>
  )
}
