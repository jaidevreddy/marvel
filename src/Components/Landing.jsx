import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Box */}
      <div className="w-1/2 bg-[#c8a2c8] flex flex-col justify-center items-center relative">
        {/* Text Box */}
        <div className="bg-white shadow-lg relative" style={{ width: '264px', height: '354px' }}>
          <img
            src="https://wallpaper.forfun.com/fetch/07/075a8701a23cde91c1d4c0a8663a0c71.jpeg"
            alt="Sample"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <h1
            className="absolute top-[-57px] text-white text-3xl font-bold text-left w-full z-10"
            style={{ marginLeft: '-56.7px' }}
          >
            Music can <br />
            <span className="text-white text-left relative">
              change the world
            </span>
          </h1>
        </div>
        {/* Subtext */}
        <p className="absolute bottom-8 left-8 text-white max-w-[50%]">
          At Marvelous, we offer the finest quality musical instruments for musicians of all levels. Our instruments are crafted to the highest standards, ensuring superior sound and durability.
        </p>
      </div>
      
      {/* Right Box */}
      <div className="w-1/2">
        <img src="https://wallpapers.com/images/hd/black-rock-band-musical-instrument-taik133lhhr235x2.jpg" alt="Architecture" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default LandingPage;
