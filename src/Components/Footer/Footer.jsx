import React from 'react';
import logo from '../../assets/images/more/logo1.png'
import bgIMg from '../../assets/images/more/13.jpg'
import { FaFacebook, FaTwitter,FaInstagramSquare, FaLinkedin,FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{backgroundImage: `url(${bgIMg})`}} className="footer bg-cover bg-center py-10">
      <div className='w-10/12 mx-auto md:flex justify-between items-center gap-16'>
      <div className='md:w-1/2'>
      <div >
   <img className='w-24' src={logo} alt="" />
    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
  </div> 
  <div>
    <h3 className="footer-title text-2xl text-[#331A15]">Social</h3> 
    <div className="text-2xl space-x-5 mb-3">
        <FaFacebook className='inline-block'></FaFacebook>
        <FaInstagramSquare className='inline-block'></FaInstagramSquare>
        <FaTwitter className='inline-block'></FaTwitter>
        <FaLinkedin className='inline-block'></FaLinkedin>
    </div>
    <h3 className="footer-title text-2xl text-[#331A15]">Get in Touch</h3> 
    <div className='space-y-2'>
      <p className='text-base'><FaPhoneAlt  className='inline-block me-3'></FaPhoneAlt>+88 01533 333 333</p>
      <p className='text-base'><FaEnvelope className='inline-block me-3'></FaEnvelope>info@gmail.com</p>
     <p className='text-base'><FaMapMarkerAlt className='inline-block me-3'></FaMapMarkerAlt>72, Wall street, King Road, Dhaka</p>
    </div>
  </div>
      </div>

      <div className='md:w-1/2 mt-5'>
      <h3 className="footer-title text-2xl text-[#331A15]">Contact US</h3>

      <div className='space-y-5'>
      <input type="text" placeholder="Name" className="input w-full max-w-xs" />
      <input type="email" placeholder="email" className="input w-full max-w-xs" />
      <textarea type="text" placeholder="Message" className="input w-full max-w-xs h-24" />
      <button className="btn btn-outline block rounded-full">Send Message</button>
      </div>

      </div>
      </div>
</footer>
  );
};

export default Footer;