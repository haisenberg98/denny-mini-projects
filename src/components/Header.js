import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className='flex justify-between items-center p-2'>
        <button onClick={() => setIsOpen(true)} className='md:hidden'>
          <div className='hamburger-line mb-1'></div>
          <div className='hamburger-line'></div>
        </button>
        <h1>Mini Projects</h1>
        <div className='items-center hidden md:flex'>
          <nav className='flex space-x-4 md:space-y-0'>
            <Link to='/'>Home</Link>
            {/* <Link to='about-me'>About Me</Link> */}
          </nav>
        </div>
        {isOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'
            onClick={() => setIsOpen(false)}
          >
            <div className='bg-white fixed top-0 left-0 flex flex-col justify-center items-center p-4 space-y-4'>
              <nav className='flex flex-col space-y-4 text-black'>
                <Link to='/' className='text-2xl hover:text-gray-400'>
                  Home
                </Link>
                {/* <Link to='about-me' className='text-2xl hover:text-gray-400'>
                    About Me
                  </Link> */}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
