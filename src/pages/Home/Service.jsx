import React from 'react';
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'

const Service = () => {
  return (
    <div className='py-10 bg-[#ECEAE3]'>
      <div className='w-10/12 mx-auto md:flex justify-between gap-5 space-y-10 sm:space-y-0'>
        <div>     
         <img src={icon1} alt="" />
        <h3 className='text-3xl py-2'>Awesome Aroma</h3>
        <p>You will definitely be a fan of the design & aroma of your coffee</p></div>
        <div>     
         <img src={icon2} alt="" />
        <h3 className='text-3xl py-2'>High Quality</h3>
        <p>You will definitely be a fan of the design & aroma of your coffee</p></div> 
        <div>     
         <img src={icon3} alt="" />
        <h3 className='text-3xl py-2'>Pure Grades</h3>
        <p>You will definitely be a fan of the design & aroma of your coffee</p></div>
        <div>     
         <img src={icon4} alt="" />
        <h3 className='text-3xl py-2'>Proper Roasting</h3>
        <p>You will definitely be a fan of the design & aroma of your coffee</p></div>
      </div>
    </div>
  );
};

export default Service;