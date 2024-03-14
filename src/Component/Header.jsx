import React from 'react';

const Header = () => {
  return (
    <>
      <div className='bg-gradient-to-tl from-gray-600 to-gray-600 h-[600px] s-full relative'>
        <img src='/Lettuce.jpg' className='w-full h-full object-cover absolute mix-blend-overlay blur-15'/>
        <div className='p-24 flex flex-col justify-center items-center h-[600px]'>
          <h1 className='text-8xl text-white text-center'>100% ORGANIC</h1>
          <button className='text-white rounded-3xl w-[160px] border border-gray-100 px-5 py-2 text-xl mt-16 text-center'>Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Header;
