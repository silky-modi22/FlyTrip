# FlyTrip

## Your AI-Powered Personalized Trip Itinerary Planner

You're dreaming of your next adventure, but the thought of planning it all makes your head spin. That's where "FlyTrip" comes in - your personal AI travel buddy that's about to make your vacation dreams a reality!

https://fly-trip.vercel.app/

![image](https://github.com/user-attachments/assets/5a7c9c4b-f129-4913-9ea8-a711dcc768fd)

![image](https://github.com/user-attachments/assets/823c72cd-9500-4aff-8f77-5090ed2d1cb3)

![image](https://github.com/user-attachments/assets/3fc2a87e-52d4-440c-87d0-307aafa1050d)


## Table of Contents

- Introduction
- Features
- Tech Stack
- Installation
- Configuration
- Deployment


## Introduction

FlyTrip is a smart, AI-driven web application that creates personalized travel itineraries tailored to users' preferences.

Just tell FlyTrip where you want to go, how much you want to spend, how long you'll be there, and who's tagging along. Then sit back and watch the magic happen! In no time, you'll have a tailor-made itinerary that fits you like a glove. This web application delivers a comprehensive, day-by-day plan by suggesting nearby hotels and tourist spots.

The personalized nature of FlyTrip ensures that users stay within their budget while maximizing their travel experience.



## Features

- Custom Itineraries: Personalized day-by-day trip schedules
- Smart Recommendations: AI-driven hotel and attraction suggestions
- Integrated Booking: Direct links to Google Maps for reservations
- Trip History: Save and revisit past travel plans
- Responsive Design: Optimized for desktop and mobile
- Secure Authentication: Google login via Firebase OAuth
- AI Enhancement: Gemini-powered personalized experiences
- User-Friendly: Intuitive interface, free to use
## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Firebase (for database and authentication)
- **Authentication:** OAuth 2.0 with Firebase
- **Deployment:** Vercel (for fast and scalable hosting)
- **APIs:** Google Maps API, Google Places API
- **Additional Tools:** Vite for frontend tooling, Gemini AI for personalized experience
## Installation
To run FlyTrip locally:

1. Clone the repository:
```bash
git clone https://github.com/silky-modi22/FlyTrip.git
```
2. Navigate into the project directory:
```bash
cd Trip
```
```bash
cd Trip
```
3. Install the dependencies:
```bash
npm install
```
4. Create a .env file in the root directory and add your Firebase and Google API credentials

5. Start the development server
```bash
npm run dev
```


## Configuration

1. **Firebase Configuration:**
Set up a Firebase project and obtain your Firebase configuration credentials (API key, Auth domain, Project ID, etc.).
Add these credentials to your .env file as environment variables.

2. **Google Maps & Places API:**
Obtain API keys from the Google Cloud Platform for both Maps and Places APIs.
Add these keys to your .env file.

## Deployment

**FlyTrip** is deployed on Vercel. You can deploy your own version by following these steps:

Fork the repository.

Set up your environment variables in Vercel for Firebase and Google API keys.

Connect your GitHub repository to Vercel and deploy.

