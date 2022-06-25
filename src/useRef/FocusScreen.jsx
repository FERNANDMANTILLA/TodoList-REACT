import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef= useRef();
    
    const focusButton = () =>{
        
        inputRef.current.select();

    }

  return (
    <>
    <h1>Focus Screen</h1>
    <hr />
    <input ref={inputRef} className='form-control col-3' id="Username" type="text" name='Username' placeholder='Enter Username'/>
    <button onClick={focusButton} className='btn btn-primary mt-2'>Focus</button>
    </>
  )
}
