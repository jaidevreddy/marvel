import React from 'react';

const MarvelousComponent = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-3/5 flex justify-center items-center bg-gray-200">
        <img
          src="https://cdn.pixabay.com/photo/2023/01/29/00/16/drums-7751985_640.jpg" // Replace with your image URL
          alt="Marvelous"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-2/5 flex pl-11 font-sans items-center bg-white text-black">
        <h1 className="text-[14rem] text-left font-semibold">Marvelous</h1>
      </div>
    </div>
  );
};

export default MarvelousComponent;
