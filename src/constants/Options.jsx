export const SelectTravelesList = [
    {
        id: 1,
        title: "Just Me",
        desc: "A sole travels in exploration",
        icon: "👤",
        people: "1",
    },
    {
        id: 2,
        title: "A Couple",
        desc: "Two travels in tandem",
        icon: "👫",
        people: "2 People",
    },
    {
        id: 3,
        title: "Family",
        desc: "A group of fun loving adv",
        icon: "👪",
        people: "3 to 5 people",
    },
    {
        id: 4,
        title: "Friends",
        desc: "A group of friends on a trip",
        icon: "👬",
        people: "6 to 10 people",
    },
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Cheap",
        desc: "Stay conscious of costs",
        icon: "💵",
    },
    {
        id: 2,
        title: "Moderate",
        desc: "Keep cost on the average side",
        icon: "💰",
    },
    {
        id: 3,
        title: "Expensive",
        desc: "Money is not a concern",
        icon: "💸",
    },
];

export const AI_PROMPT = 
'Generate a ${totalDays}-day travel itinerary for a ${traveler} visiting ${location} on a ${budget}, with all details in JSON format. Ensure the JSON is structured for easy parsing and usability in a web application. Focus on budget-friendly options, local experiences, and popular attractions. Provide placeholder URLs for images if actual URLs cannot be fetched. Geo coordinates and prices should be realistic.\n\n*Structure Requirements:*\n\n1.*Hotel Options* (3 options):\n    - hotel_name: Name of the hotel\n    - address: Full address of the hotel\n    - price_per_night: Price per night in Indian Rupees (INR)\n    - image_url: Provide placeholder URL if image URL can not be fetched\n    - geo_coordinates: Latitude and longitude in decimal format\n    - rating: Rating out of 5\n    - description: Brief description (maximum 50 words)\n\n2. Daily Itinerary (${totalDays} days):\n    - For each day, list 4-5 activities or places to visit.\n    - Provide the following details for each activity:\n        - place_name: Name of the place\n        - description: Brief description (maximum 30 words)\n        - image_url: Provide placeholder URL if image URL can not be fetched\n        - geo_coordinates: Latitude and longitude in decimal format\n        - entrance_fee: Entrance fee in INR (if applicable, otherwise \"Free\")\n        - rating: Rating out of 5\n        - time_to_spend: Estimated time to spend at the location (in hours)\n        - best_time_to_visit: Best time of the day to visit (e.g., morning, afternoon)\n    - *Route Suggestion*: Provide suggested travel routes between locations with the total estimated travel time for the day.\n\n3. *Budget Breakdown*:\n    - meals_per_day: Estimated daily expenses for meals (in INR)\n    - transportation_costs: Estimated transportation costs per day (in INR)\n    - miscellaneous_expenses: Additional expenses (in INR)\n\n*Formatting and Guidelines:*\n- Use realistic prices for budget travelers in Mumbai.\n- Provide precise and accurate geo coordinates.\n- All prices should be in INR.\n- Ensure ratings and descriptions are brief but informative.\n- Ensure the JSON structure is valid and well-formatted for parsing.\n- Focus on economical, yet comfortable options for hotels, and budget-friendly attractions.\n\n*Expected Output:*\nThe output should be a detailed JSON object, structured for ease of use in a web app. Provide images that accurately represent the specified location in terms of landmarks, architecture, natural scenery, and other recognizable features. Placeholder values (like image URLs) should be clearly marked if the related image is not found and easily replaceable. Include geo coordinates for all locations and hotels.';
