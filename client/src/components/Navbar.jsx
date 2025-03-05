import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#FFFFFF] text-[#000000] flex justify-between items-center px-8 py-3 fixed top-0 w-full z-10'>
      <div className='flex justify-between items-center gap-3 text-sm font-semibold'>
        <p>about us</p>
        <p>interior design</p>
        <p>elevation design</p>
        <p>landscape design</p>
      </div>
      <div className=''>
        <p className=' text-6xl text-[#1B1B1B]'>essentia<span className=' text-lg'>&reg;</span></p>
      </div>
      <div className='flex justify-between items-center text-sm gap-3 w-96 font-semibold'>
        <select><option value="">bespoke furniture</option></select>
        <select><option value="">projects</option></select>
        <select><option value="">turnkey execution</option></select>
      </div>
    </div>
  )
}

export default Navbar
