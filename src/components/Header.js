import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-white border-b'>
      <div className='container mx-auto flex justify-between md:justify-center items-center p-4'>
        <button onClick={() => setIsOpen(true)} className='lg:hidden'>
          <div className='hamburger-line mb-1'></div>
          <div className='hamburger-line'></div>
        </button>
        <h1>Portfolio</h1>
      </div>
      {isOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'
          onClick={() => setIsOpen(false)}
        >
          <div className='bg-white fixed top-0 left-0 flex flex-col justify-center items-center p-4 space-y-4'>
            <nav className='flex flex-col space-y-4 text-black'>
              <a href='/' className='text-2xl hover:text-gray-400'>
                Home
              </a>
              <a href='/about' className='text-2xl hover:text-gray-400'>
                About
              </a>
              <a href='/contact' className='text-2xl hover:text-gray-400'>
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
