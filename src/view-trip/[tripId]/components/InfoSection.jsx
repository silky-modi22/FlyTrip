/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { Button } from '@/components/ui/button'
// import { GetPlaceDetails } from '@/service/GlobalApi';
// import React, { useEffect } from 'react'
// import { FaShare } from "react-icons/fa6";

// function InfoSection({trip}) {
 
//   return (
//    <div className='max-w-xl mx-auto'>
//  <img className='h-[200px] sm:h-[280px] md:h-[340px] w-full object-cover rounded-xl' src='/placeholder.jpg' alt="" />

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { FaShare } from "react-icons/fa6";
import { getCityImage } from "@/service/GlobalApi";

function InfoSection({trip}) {
  const [cityImage, setCityImage] = useState('/placeholder.jpg');
  useEffect(() => {
    const fetchCityImage = async () => {
      if (trip?.userSelection?.location) {
        const imageUrl = await getCityImage(trip.userSelection.location);
        if (imageUrl) {
          setCityImage(imageUrl);
        }
      }
    };

    fetchCityImage();
  }, [trip?.userSelection?.location]);
  return (
    <div className='max-w-xl mx-auto'>
      <img className='h-[200px] sm:h-[280px] md:h-[340px] w-full object-cover rounded-xl' src={cityImage} alt={trip?.userSelection?.location || "City"} />
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5'>
       <div className='flex flex-col gap-2'>
      <h2 className='font-bold text-lg sm:text-xl md:text-2xl mt-2 sm:mt-0'>{trip?.userSelection?.location}</h2>
      <div className='flex flex-wrap gap-3 sm:gap-5 mt-2'>
        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm'>
          📆 {trip?.userSelection?.nOofdays} Day
        </h2>
        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm'>
          💰 {trip?.userSelection?.budget} Budget
        </h2>
        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm'>
          💏 No. of traveler: {trip?.userSelection?.traveler}
        </h2>
      </div>
    </div>
    <Button className='mt-3 sm:mt-0 sm:ml-5'>
      <FaShare />
    </Button>
  </div>
</div>

  )
}

export default InfoSection
