import React from 'react'
import cinemaLogo from '../cinema-logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex border-none shadow-lg space-x-8 items-center pl-3 py-3'>
        <img src={cinemaLogo} alt="Cinema" className='w-[50px] rounded-full border-2 border-blue-500' />

        <Link to="/" className='text-blue-500 font-bold text-2xl'>Movies</Link>
        <Link to="/watchlist" className='text-blue-500 font-bold text-2xl'>Watchlist</Link>
    </div>
  )
}

export default Navbar