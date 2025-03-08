import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa6';
import BespokeFurniture from '../pages/BespokeFurniture';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bespokeMenu, setBespokeMenu] = useState(false);

  return (
    <div className='bg-[#FFFFFF] text-[#000000] flex justify-between items-center px-8 py-3 fixed top-0 w-full z-10 shadow-md'>
      {/* Left Links */}
      <div className='hidden md:flex items-center gap-3 text-sm font-semibold '>
        <Link to='/about-us' className='no-underline text-inherit hover:text-[#B97B4F]'>
          <p>about us</p>
        </Link>
        <Link to='/interiors-and-designs' className='no-underline text-inherit hover:text-[#B97B4F]'>
          <p>interior design</p>
        </Link>
        <Link to='/elevation-design' className='no-underline text-inherit hover:text-[#B97B4F]'>
          <p>elevation design</p>
        </Link>
        <Link to='/landscape-designing' className='no-underline text-inherit hover:text-[#B97B4F]'>
          <p>landscape design</p>
        </Link>
      </div>

      {/* Logo */}
      <div className='text-center flex-1'>
        <Link to='/' className='no-underline text-inherit'>
          <p className='text-4xl md:text-6xl text-[#1B1B1B]'>
            essentia<span className='text-lg'>&reg;</span>
          </p>
        </Link>
      </div>

      {/* Right Links */}
      <div className='hidden md:flex items-center text-sm gap-3 w-auto font-semibold'>
        <div
          className='relative'
          onMouseEnter={() => setBespokeMenu(true)}
          onMouseLeave={() => setBespokeMenu(false)}
        >
          <div className='bg-transparent cursor-pointer px-2 py-5 hover:text-[#B97B4F] flex items-center gap-1'>
            bespoke furniture <span><FaAngleDown /></span>
          </div>
        </div>

        <div className='bg-transparent cursor-pointer px-2 py-5 hover:text-[#B97B4F] flex items-center gap-1'>
          projects <span><FaAngleDown /></span>
        </div>
        <Link to='/turnkey-execution' className='no-underline text-inherit hover:text-[#B97B4F]'>
          <div className='bg-transparent cursor-pointer px-2 py-5 hover:text-[#B97B4F]'>turnkey execution</div>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden'>
          <Link to='/about-us' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>about us</Link>
          <Link to='/interiors-and-designs' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>interior design</Link>
          <Link to='/elevation-design' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>elevation design</Link>
          <Link to='/landscape-designing' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>landscape design</Link>

          {/* Toggle Bespoke Furniture in Mobile */}
          <div className='py-2 text-sm cursor-pointer flex items-center gap-1' onClick={() => setBespokeMenu(!bespokeMenu)}>
            bespoke furniture <FaAngleDown />
          </div>

          {/* Show Bespoke Furniture in Mobile */}
          {bespokeMenu && (
            <div className='w-full bg-gray-100 px-4 py-2'>
              <BespokeFurniture />
            </div>
          )}

          <div className='py-2 text-sm cursor-pointer'>projects</div>
          <Link to='/turnkey-execution' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>turnkey execution</Link>
        </div>
      )}

      {/* Desktop Bespoke Furniture Component */}
      {bespokeMenu && !menuOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center z-10 h-[500px] top-18'
          onMouseEnter={() => setBespokeMenu(true)}
          onMouseLeave={() => setBespokeMenu(false)}
        >
          <BespokeFurniture />
        </div>
      )}
    </div>
  );
};

export default Navbar;
