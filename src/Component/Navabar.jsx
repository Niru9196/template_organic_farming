import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center bg-white text-green-700 w-full py-4 px-8 fixed top-0 left-0 z-10 shadow-lg'>
      <h2 className='text-2xl font-bold'>Organic Farming</h2>
      <nav className="flex space-x-4">
        <a href="#" className="font-semibold text-xl hover:text-black"><NavLink exact to={'/home'} >Home</NavLink></a>
        <a href="#" className="font-semibold text-xl hover:text-black"><NavLink to={'/about'} >About</NavLink></a>
        <a href="#" className="font-semibold text-xl hover:text-black"><NavLink to={'/feature'} >Features</NavLink></a>
        <a href="#" className="font-semibold text-xl hover:text-black"><NavLink to={'/services'} >Services</NavLink></a>
      </nav>
    </header>
  );
};

export default Navbar;
