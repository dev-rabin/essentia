import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa6';
import BespokeFurniture from './Furniture';
import Projects from '../pages/Projects';
import Logo from '../assets/img/ssl_logo.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bespokeMenu, setBespokeMenu] = useState(false);
  const [projectsMenu, setProjectsMenu] = useState(false);

  return (
    <div className='bg-[#FFFFFF] text-[#000000] flex justify-between items-center px-6 lg:px-10 py-3 fixed top-0 w-full z-10'>
      {/* Logo */}
      <div className='text-center'>
        <Link to='/' className='no-underline flex items-center gap-4'>
        <img src={Logo} alt="" className='w-10 h-10'/>
          <p className='text-3xl md:text-4xl lg:text-3xl xl:text-3xl text-[#1B1B1B] font-semibold logo-heading uppercase'>
            Shub Shiv Living<span className='text-lg'>&reg;</span>
          </p>
        </Link>
      </div>

      <div className='hidden lg:flex items-center w-2/5 justify-around'>
      <Link to='/' className='no-underline text-inherit hover:text-[#B97B4F]'>
          Home
        </Link>
        <Link to='/about-us' className='no-underline text-inherit hover:text-[#B97B4F]'>
          About Us
        </Link>
        <Link to='/services' className='no-underline text-inherit hover:text-[#B97B4F] py-5'>
          Service
        </Link>
        <Link to='/portfolio' className='no-underline text-inherit hover:text-[#B97B4F]'>
          Portfolio
        </Link>
        <Link to='/elevation-design' className='no-underline text-inherit hover:text-[#B97B4F]'>
          Careers
        </Link>
        {/* <Link to='/landscape-designing' className='no-underline text-inherit hover:text-[#B97B4F]'>
          landscape design
        </Link> */}
        {/* <div
          className='relative cursor-pointer'
          onMouseEnter={() => setBespokeMenu(true)}
          onMouseLeave={() => setBespokeMenu(false)}
        >
          <div className='flex items-center gap-1 px-2 py-5 hover:text-[#B97B4F]'>
            bespoke furniture <FaAngleDown />
          </div>
        </div> */}

        {/* <div
          className='cursor-pointer px-2 py-5 flex items-center gap-1 hover:text-[#B97B4F]'
          onMouseEnter={() => setProjectsMenu(true)}
          onMouseLeave={() => setProjectsMenu(false)}
        >
          projects <FaAngleDown />
        </div> */}
      
      </div>

      {/* Mobile Menu Toggle */}
      <div className='lg:hidden cursor-pointer'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <MdClose
              className="cursor-pointer border p-1 rounded-sm transition-all duration-200 hover:bg-black hover:text-white"
              size={30}
            />
          ) : (
            <MdMenu
              className="cursor-pointer border p-1 rounded-sm transition-all duration-200 hover:bg-black hover:text-white"
              size={30}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden'>
          <Link to='/about-us' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>
            about us
          </Link>
          <Link to='/interiors-and-designs' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>
            interior design
          </Link>
          <Link to='/elevation-design' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>
            elevation design
          </Link>
          <Link to='/landscape-designing' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>
            landscape design
          </Link>

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

          <div className='py-2 text-sm cursor-pointer flex items-center gap-1' onClick={() => setProjectsMenu(!projectsMenu)}>
            projects <FaAngleDown />
          </div>
          {projectsMenu && (
            <div className='w-full bg-gray-100 px-4 py-2 border h-72 overflow-y-auto'>
              <div className="space-y-4 p-2">
                <Projects />
              </div>
            </div>
          )}
          <Link to='/turnkey-execution' className='py-2 text-sm' onClick={() => setMenuOpen(false)}>
            turnkey execution
          </Link>
        </div>
      )}

      {/* Desktop Bespoke Furniture Component */}
      {bespokeMenu && !menuOpen && (
        <div
          className='absolute left-1/2 transform -translate-x-1/2 top-18 bg-white shadow-lg w-full p-4'
          onMouseEnter={() => setBespokeMenu(true)}
          onMouseLeave={() => setBespokeMenu(false)}
        >
          <BespokeFurniture />
        </div>
      )}
      {projectsMenu && !menuOpen && (
        <div
          className='absolute left-1/2 transform -translate-x-1/2 top-18 bg-white shadow-lg w-full p-4'
          onMouseEnter={() => setProjectsMenu(true)}
          onMouseLeave={() => setProjectsMenu(false)}
        >
          <Projects />
        </div>
      )}
    </div>
  );
};

export default Navbar;
