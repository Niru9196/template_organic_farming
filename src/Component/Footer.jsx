import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-tl from-gray-700 to-gray-500 h-[500px] s-full relative -mt-10">
        <img
          src="/carrot.jpg"
          className="w-full h-full object-cover absolute mix-blend-overlay blur-sm bg-opacity-55"
        />
        <div className="p-24 flex justify-around">
          <div className="flex flex-col text-white">
            <h4 className="text-2xl">Contact</h4>
            <ul className="mt-5">
              <li>The Organic Center</li>
              <li className="mt-1">The Hall of the States</li>
              <li className="mt-1">444N, Capital New </li>
              <li className="mt-1">Mall Road, Bangalore</li>
            </ul>
          </div>

          <div className="flex flex-col text-white">
            <h4 className="text-2xl">Quick Menu</h4>
            <ul className="mt-5">
              <li>Why Organic?</li>
              <li className="mt-1">WHO WE ARE</li>
              <li className="mt-1">OUR WORK </li>
              <li className="mt-1">RESEARCH</li>
            </ul>
          </div>

          <div className="flex flex-col text-white">
            <h4 className="text-2xl">Download</h4>
            <ul className="mt-5">
              <li>Windows app</li>
              <li className="mt-1">Mac app</li>
              <li className="mt-1">Linux app</li>
              <li className="mt-1">Desktop app</li>
            </ul>
          </div>

          <div className="flex flex-col text-white">
            <h4 className="text-2xl">Get in Touch</h4>
            <div className="flex mt-5">
              <input 
                type="text"
                className="w-48 border border-gray-300  px-3 py-2 bg-gray-800"
                placeholder="Enter Email Address"
                // Add onChange event handler to capture input
              />
              <button className="bg-green-500 text-white px-4 py-2  hover:bg-blue-600">
                GO
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <div className="ml-[165px]">
            <p className="text-white">Copyright @2002 All Rights Reserved</p>
          </div>
          <div className="flex justify-center mr-[160px]">
            <TwitterIcon className="text-green-500 mx-2" />
            <InstagramIcon className="text-green-500 mx-2" />
            <WhatsAppIcon className="text-green-500 mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
