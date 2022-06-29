import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="nav nav-tabs gap-5 justify-content-lg-start justify-content-center text-left bg-gray-dark p-1 shadow-box-2 mb-3 ">
      
      <Link className='nav-link' to='/'><p className='m-0 text-white '>All</p></Link>
      <Link className='nav-link' to='completed'><p className='m-0 text-white '>Completed</p></Link>
      <Link className='nav-link' to='pendings'><p className='m-0 text-white '>Pendings</p></Link>
     
    </nav>
  )
}
