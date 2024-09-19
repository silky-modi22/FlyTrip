/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-2xl">
          <h1 className="font-extrabold text-4xl md:text-5xl text-center md:text-left mb-6">
            <span className="text-[#FF8C00]">Unlock Your Next Beautiful Journey with AI</span>
            <span className="block text-[#1E3A8A] mt-4">Custom Itineraries Just for You!</span>
          </h1>
          <p className="text-xl text-gray-900 text-center md:text-left mb-8">
            Your Personal Trip Planner and Travel Curator: 
            Personalized Travel Plans at Your Fingertips!⛺🌴
          </p>
          <div className="text-center md:text-left">
            <Link to="/create-trip">
              <Button className="bg-[#FF8C00] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition duration-300">
                Plan Your Dream Trip!
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <img 
            src="/bg.jpeg" 
            alt="Travel destinations collage" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero
