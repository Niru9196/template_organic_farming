import React from 'react';
import { vegetable } from '../Data/Data';

const Card = () => {
  return (
    <div className='flex m-auto flex-wrap mb-16 mx-w-[1000px] justify-center gap-10 shadow-lg bg-slate-200 -mt-3  ' >
      {vegetable.map((veg, index) => (
        <div key={index} className='w-[400px] h -[250px]  rounded-lg bg-white mt-10  '>
          <img src={veg.image} alt={veg.title} className="w-full object-cover h-[200px]" />
          <h4 className="text-2xl font-semibold mt-4 pl-4">{veg.title}</h4>
          <p className="mt-2 h-[160px] p-4">{veg.details}</p>
          <button className='text-white rounded-3xl w-[160px]  border-gray-900 px-5 py-2 text-xl mt-8 text-center mb-5 ml-4 bg-green-800'>Buy</button>
        </div>
      ))}

      
    </div>
  );
};

export default Card;
