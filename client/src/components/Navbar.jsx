import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#FFFFFF] text-[#000000] flex justify-between items-center px-8 py-3 fixed top-0 w-full z-10'>
      <div className='flex justify-between items-center gap-3 text-sm font-semibold'>
        <Link to={"/about-us"} className='no-underline text-inherit'>
          <p>about us</p>
        </Link>
        <Link to="/interiors-and-designs" className='no-underline text-inherit'>
          <p>interior design</p>
        </Link>
        <Link to="/elevation-design" className='no-underline text-inherit'>
          <p>elevation design</p>
        </Link>
        <Link to="/landscape-designing" className='no-underline text-inherit'>
          <p>landscape design</p>
        </Link>
      </div>
      <div className=''>
        <Link to={"/"} className='no-underline text-inherit'>
          <p className=' text-6xl text-[#1B1B1B]'>essentia<span className=' text-lg'>&reg;</span></p>
        </Link>
      </div>
      <div className='flex justify-between items-center text-sm gap-3 w-96 font-semibold'>
        <select><option value="">bespoke furniture</option></select>
        <select><option value="">projects</option></select>
        <Link to="/turnkey-execution" className='no-underline text-inherit'>
          <p>turnkey execution</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
