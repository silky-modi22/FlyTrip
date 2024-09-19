// import axios from "axios"

// const BASE_URL='https://maps.googleapis.com/maps/api/place/findplacefromtext/json'

// const config={
//     headers:{
//         'Content-Type':'application/json',

// 'X-Goog-Api-Key':import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
//         'X-Goog-FieldMask':[
//             'places.photos',
//             'places.displayName',
//             'places.id'
//         ]
//     }
// }


// import axios from 'axios';

// const API_KEY = process.env.VITE_GOOGLE_PLACE_API_KEY;

// export const getCityImage = async (cityName) => {
//   try {
//     const response = await axios.get(
//       `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${cityName}&inputtype=textquery&fields=photos&key=${API_KEY}`
//     );

//     if (response.data.candidates && response.data.candidates[0] && response.data.candidates[0].photos) {
//       const photoReference = response.data.candidates[0].photos[0].photo_reference;
//       return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoReference}&key=${API_KEY}`;
//     }
//     return null;
//   } catch (error) {
//     console.error('Error fetching city image:', error);
//     return null;
//   }
// };


import axios from 'axios';

// Ensure you have the API key correctly set in your .env file
const API_KEY = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

export const getCityImage = async (cityName) => {
  try {
    // Make the request to Google Places API to get the photo reference
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`, 
      {
        params: {
          input: cityName,
          inputtype: 'textquery',
          fields: 'photos',
          key: API_KEY
        }
      }
    );

    if (response.data.candidates && response.data.candidates[0] && response.data.candidates[0].photos) {
      const photoReference = response.data.candidates[0].photos[0].photo_reference;

      // Return the photo URL
      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoReference}&key=${API_KEY}`;
    }

    return null;
  } catch (error) {
    console.error('Error fetching city image:', error);
    return null;
  }
};


