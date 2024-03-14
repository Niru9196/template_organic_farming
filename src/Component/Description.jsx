import React from 'react';

const Description = () => {
  return (
    <div>
      <div className='bg-gradient-to-tl from-gray-500 to-gray-500 h-96 s-full relative'>
        <img src='/Lettuce.jpg' className='w-full h-full object-cover absolute mix-blend-overlay blur-15'/>
        <div className='p-24'>
          <h1 className='text-white text-7xl font-bold text-center  '>FRESH & NON-GMO PRODUCTS</h1>
          <p className='text-white text-xl font-medium text-center mt-2 tracking-wide'>Organic farming: Cultivating a healthier future, one seed at a time</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
