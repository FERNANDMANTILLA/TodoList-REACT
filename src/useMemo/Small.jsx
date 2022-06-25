import React from 'react'
import {memo} from 'react'

export const Small = memo(({count}) => {
    
    console.log('Small rendered');

  return (
    <small> {count} </small>
  )

})
