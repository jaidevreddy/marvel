import React from 'react';
import placeholderImage1 from '../assets/guitar1.jpg';  // Add your image paths
import placeholderImage2 from '../assets/drum1.jpg';  // Add your image paths
import placeholderImage3 from '../assets/guitar2.webp';  // Add your image paths
import placeholderImage4 from '../assets/violin1.jpg';  // Add your image paths
import placeholderImage5 from '../assets/piano1.webp';  // Add your image paths
import './Options.css';  // Make sure to create this CSS file

function Howtouse() {
  const steps = [
    { title: "Yamaha F600M", description: "$20,000", image: placeholderImage1 },
    { title: "DRUM KIT AJOO7", description: "$13,000.", image: placeholderImage2 },
    { title: "The Guitar Company guitar 790", description: "$70,000", image: placeholderImage3 },
    { title: "Violin LT091", description: "$50,000", image: placeholderImage4 },
    { title: "Yamaha Piano CL009", description: "$18,000", image: placeholderImage5 }
  ];
  
  return (
    <div className='bg-[#9874d3] text-center py-12 w-full'>
     
      <h2 className="text-5xl text-left font-bold pl-16 text-white mt-2">
        Online Music Store
      </h2>
      <p className="mt-4 text-lg pl-[70px] text-white text-left">
      The best way to buy the products which you aspire.
      </p>
      <div className='mt-6 flex justify-center space-x-6'>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-lg shadow-lg w-72 h-72 flex items-center justify-center overflow-hidden image-box">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <p className="mt-4 text-xl font-bold text-white">{step.title}</p>
            <p className="mt-2 text-gray-100 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Howtouse;
