import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/images/Pricing Cards.png';
import image2 from '../assets/images/Product Modal.png';
import image3 from '../assets/images/Subscribe Card.png';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Body
    <div className='flex flex-col pt-4 px-4 mx-auto bg-customDark min-h-screen'>
      {/* Wrapper */}
      <div className='p-6 text-customDarkGreen bg-customLightGreen rounded-md'>
        {/* Header */}
        <header className='flex justify-between items-center p-2'>
          <button onClick={() => setIsOpen(true)} className='md:hidden'>
            <div className='hamburger-line mb-1'></div>
            <div className='hamburger-line'></div>
          </button>
          <h1>Mini Projects</h1>
          <div className='items-center hidden md:flex'>
            <nav className='flex space-x-4 md:space-y-0'>
              <a href='/'>Home</a>
              <a href='/about-me'>About Me</a>
            </nav>
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
        {/* Header End */}
        {/* Search button */}
        <div className='flex flex-col justify-between mt-10 px-2 md:flex-row'>
          <div className='flex self-center space-x-2 justify-between'>
            <input
              type='text'
              className='px-2 border-b-2 border-b-[#9CA3A6] bg-[#CCD4D9] focus:outline-none'
              placeholder='Search..'
            />
          </div>
          <button className='p-4 mt-8 bg-[#545959] border text-[#CCD4D9] rounded-lg hover:bg-[#CCD4D9] transistion-all duration-150 hover:border-[#545959] hover:text-[#545959] md:mt-0'>
            Upload
          </button>
        </div>
        {/* Main */}
        <main className='grid md:grid-cols-2 gap-4 justify-center mt-8'>
          {/* Grid Items */}
          <div className='relative group'>
            <img src={image1} alt='img' srcset='' />
            <div className='grid-item-description'>
              <div>
                <p>Pricing Cards</p>
                <p>Tailwind CSS Project</p>
              </div>
              <FontAwesomeIcon
                icon={faBookBookmark}
                className='text-customWhite'
              />
            </div>
          </div>
          <div className='relative group'>
            <img src={image2} alt='img' srcset='' />
            <div className='grid-item-description'>
              <div>
                <p>Product Modal</p>
                <p>Tailwind CSS Project</p>
              </div>
              <FontAwesomeIcon
                icon={faBookBookmark}
                className='text-customWhite'
              />
            </div>
          </div>
          <div className='relative group'>
            <img src={image3} alt='img' srcset='' />
            <div className='grid-item-description'>
              <div>
                <p>Subscribe Card</p>
                <p>Tailwind CSS Project</p>
              </div>
              <FontAwesomeIcon
                icon={faBookBookmark}
                className='text-customWhite'
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
