import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa6';
import BespokeFurniture from '../pages/BespokeFurniture';
import Projects from '../pages/Projects';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bespokeMenu, setBespokeMenu] = useState(false);
  const [projectsMenu, setProjectsMenu] = useState(false);

  return (
    <div className='bg-[#FFFFFF] text-[#000000] flex justify-between items-center px-6 lg:px-8 py-3 fixed top-0 w-full z-10 shadow-md'>
      {/* Left Links */}
      <div className='hidden lg:flex items-center gap-3 text-sm font-semibold'>
        <Link to='/about-us' className='no-underline text-inherit hover:text-[#B97B4F]'>
          about us
        </Link>
        <Link to='/interiors-and-designs' className='no-underline text-inherit hover:text-[#B97B4F]'>
          interior design
        </Link>
        <Link to='/elevation-design' className='no-underline text-inherit hover:text-[#B97B4F]'>
          elevation design
        </Link>
        <Link to='/landscape-designing' className='no-underline text-inherit hover:text-[#B97B4F]'>
          landscape design
        </Link>
      </div>

      {/* Logo */}
      <div className='text-center flex-1'>
        <Link to='/' className='no-underline text-inherit'>
          <p className='text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-[#1B1B1B] font-semibold logo-heading'>
            shub shiv living<span className='text-lg'>&reg;</span>
          </p>
        </Link>
      </div>

      {/* Right Links */}
      <div className='hidden lg:flex items-center text-sm gap-3 font-semibold'>
        <div
          className='relative cursor-pointer'
          onMouseEnter={() => setBespokeMenu(true)}
          onMouseLeave={() => setBespokeMenu(false)}
        >
          <div className='flex items-center gap-1 px-2 py-5 hover:text-[#B97B4F]'>
            bespoke furniture <FaAngleDown />
          </div>
        </div>

        <div
          className='cursor-pointer px-2 py-5 flex items-center gap-1 hover:text-[#B97B4F]'
          onMouseEnter={() => setProjectsMenu(true)}
          onMouseLeave={() => setProjectsMenu(false)}
        >
          projects <FaAngleDown />
        </div>
        <Link to='/turnkey-execution' className='no-underline text-inherit hover:text-[#B97B4F] px-2 py-5'>
          turnkey execution
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className='lg:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
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
