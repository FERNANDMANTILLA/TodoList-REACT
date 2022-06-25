import React from 'react'

export const Increment = React.memo(({newIncrement}) => {
    
    console.log('Rendered');

  return (
    <>
    <button onClick={()=> newIncrement()} type="button" className="btn btn-outline-primary">Increment</button>
    </>
  )
})
