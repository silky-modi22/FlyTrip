import React from 'react';

function PlacesToVisit({ trip }) {
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-lg mt-10 mb-7 text-black">Places to Visit</h2>
      <div>
        {trip.tripData && Array.isArray(trip.tripData.daily_itinerary) ? (
          trip.tripData.daily_itinerary.map((dayData, dayIndex) => (
            <div key={dayIndex} className="mt-5">
              <h3 className="font-semibold text-lg text-dark-orange">{`Day ${dayIndex + 1}`}</h3>
              <p className="font-medium text-sm text-blue-600 mb-4">
                {dayData.route_suggestion || 'No route suggestion available'}
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {dayData.activities.map((place, index) => (
                  <div
                    key={index}
                    className="my-3 p-4 bg-white rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                    style={{
                      border: '1px solid #1E40AF', // border blue color
                      boxShadow: '0 4px 10px rgba(30, 64, 175, 0.5)', // blue shadow effect
                    }}
                  >
                    <img
                      src={place.image_url}
                      alt={place.place_name}
                      className="w-full h-40 object-cover rounded-md"
                    />

                    <h4 className="font-bold text-md mt-2 text-black">{place.place_name}</h4>

                    <p className="text-sm font-semibold text-dark-orange">
                    ⏱️Best Time to Visit:
                      <span className="font-normal text-gray-600"> {place.best_time_to_visit}</span>
                    </p>

                    <p className="text-sm font-semibold text-dark-orange">
                    📍Description:
                      <span className="font-normal text-gray-800"> {place.description}</span>
                    </p>

                    <p className="text-sm font-semibold text-dark-orange">
                    💸Entrance Fee:
                      <span className="font-normal text-gray-600"> {place.entrance_fee}</span>
                    </p>

                    <p className="text-sm font-semibold text-dark-orange">
                    🪧Estimated Time to Spend:
                      <span className="font-normal text-gray-600"> {place.time_to_spend} hours</span>
                    </p>

                    <p className="text-sm font-semibold text-dark-orange">
                    ⭐Rating:
                      <span className="font-normal text-gray-600"> {place.rating} / 5</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No itinerary available</p>
        )}
      </div>
    </div>
  );
}

export default PlacesToVisit;
