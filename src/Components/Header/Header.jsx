import React from 'react';
import img from '../../assets/images/more/15.jpg'
import logo from '../../assets/images/more/logo1.png'

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${img})` }}  className="navbar object-cover bg-center text-center">
    <div className='mx-auto'> <img className='w-14 max-w-full' src={logo} alt="" />
    <h1 className="text-white text-3xl ps-2">Espresso Emporium</h1></div>
  </div>
  );
};

export default Header;