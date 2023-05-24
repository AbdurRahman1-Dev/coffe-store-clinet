import React from 'react';
import bannerIMg from '../../assets/images/more/3.png'

const Banner = () => {
  return (
    <div className="hero md:h-screen" style={{ backgroundImage: `url(${bannerIMg})` }}>
  <div className="hero-overlay bg-opacity-25"></div>
  <div className="hero-content flex justify-end w-full  text-neutral-content ">
    <div className="md:w-7/12 ps-5 py-20 md:py-0">
      <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn border-0 text-black bg-[#E3B577]">Learn More</button>
    </div>
  </div>
</div>
  );
};

export default Banner;