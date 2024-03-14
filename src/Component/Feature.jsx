import React from 'react';
import { vegetable } from '../Data/OtherData';
import RecyclingIcon from '@mui/icons-material/Recycling';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Feature = () => {
  return (
    <div className='flex m-auto flex-wrap mb-10 justify-center gap-10 bg-slate-200 '>
      {vegetable.map((veg, index) => (
        <div key={index} className='w-[400px] h-[300px]  rounded-lg flex flex-col justify-center items-center p-3 bg-white mt-9 mb-9'>
          {veg.icons === 'VolunteerActivismIcon' && <VolunteerActivismIcon style ={{fontSize: '40px' , color: 'green'}}/>} {/* Render TwitterIcon if veg.icons is 'Twitter' */}
          {veg.icons === 'HealthAndSafetyIcon' && <HealthAndSafetyIcon style ={{fontSize: '40px', color: 'green'}} />} {/* Render InstagramIcon if veg.icons is 'Instagram' */}
          {veg.icons === 'Diversity1Icon' && <Diversity1Icon style ={{fontSize: '40px', color: 'green'}}/>} {/* Render WhatsAppIcon if veg.icons is 'WhatsApp' */}
          {veg.icons === 'DoNotDisturbIcon' && <DoNotDisturbIcon style ={{fontSize: '38px', color: 'green'}} />} {/* Render WhatsAppIcon if veg.icons is 'WhatsApp' */}
          {veg.icons === 'AttachMoneyIcon' && <AttachMoneyIcon style ={{fontSize: '40px', color: 'green'}} />} {/* Render WhatsAppIcon if veg.icons is 'WhatsApp' */}
          {veg.icons === 'RecyclingIcon' && <RecyclingIcon style ={{fontSize: '40px', color: 'green'}} />} {/* Render WhatsAppIcon if veg.icons is 'WhatsApp' */}
          <h1 className="text-2xl font-semibold mt-4 text-left">{veg.title}</h1>
          <p className="mt-2 w-[350px] text-[17px]">{veg.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default Feature;
