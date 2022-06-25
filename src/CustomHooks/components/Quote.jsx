import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

export const Quote = ({quote,author}) => {

  const quoteRef = useRef();
  const [boxsize, setBoxsize] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    const { width, height } = quoteRef.current.getBoundingClientRect();
    setBoxsize({
      width,
      height,
    })
  }, [quote])

  return (
    <>
        <blockquote className="blockquote">
          <p style={{width: 'max-content'}} ref={quoteRef}>{quote}</p>
          <footer className="card-blockquote text-black-50">{author}</footer>
        </blockquote>
        <code>{JSON.stringify(boxsize)}</code>
    </>
  )

  }