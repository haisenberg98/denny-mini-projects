import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  return (
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
  );
}

export default Search;
