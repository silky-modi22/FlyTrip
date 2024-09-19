/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/Options';
import { chatSession } from '@/service/AIModal';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {toast} from 'react-hot-toast';
// for dialog box
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// for google icon
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/FirebaseConfig';
import { RiLoader2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';




function CreateTrip() {

  const [place, setplace] = useState();

  // sara data is use from usestate mai store krenge
  const [formData, setformData] = useState([])

  //open dialogue box for authentication login singup
  const [openDialog, setopenDialog] = useState(false);

  //for handling loading state while generating trip
  const [loading, setloading] = useState(false);

  //use navigate to route into pages of diff trips
  const navigate=useNavigate();

  

  const handleInputChange=(name,value)=>{
    const updatedValue = name === 'noOfdays' ? Number(value) : value;
    setformData({...formData,
      [name]:value
    })
  } 


  const OnGenerateTrip = async () => {
    // For authentication, retrieve user data from local storage
    const user = localStorage.getItem('user');
  
    if (!user) {
      // If user is not logged in, open the dialog
      setopenDialog(true);
      return;
    }
  
    // Form validation with correct grouping
    if ((formData?.nOofdays > 10 && !formData?.location) || !formData?.budget || !formData?.traveler) {
      toast.error('Please fill all the fields to generate trip');
      return;
    }
  
    setloading(true); // Set loading to true to disable the button
  
    try {
      // Replace placeholders in AI_PROMPT
      const Final_Prompt = AI_PROMPT
        .replace('{location}', formData?.location)
        .replace('{totalDays}', formData?.nOofdays)
        .replace('{traveler}', formData?.traveler)
        .replace('{budget}', formData?.budget)
        .replace('{totalDays}', formData?.nOofdays);
  
      
  
      // Send the prompt to your API
      const result = await chatSession.sendMessage(Final_Prompt);
  
      // Handle the API response and save the trip
      console.log(result?.response?.text());
      SaveTrip(result?.response?.text());
    } catch (error) {
      console.error('Error generating trip:', error);
      toast.error('Failed to generate the trip. Please try again.');
    } finally {
      setloading(false); // Set loading to false to re-enable the button
    }
  };

  useEffect(()=>{ 
    console.log(formData);
  },[formData])
  

  //method for login with google
  const login=useGoogleLogin({ 
    //it has two callback methods
    onSuccess:(codesResp)=>GetUserProfile(codesResp),
    onError:(error)=>console.log(error)
  }) 

   //to get information of user
   const GetUserProfile=(token_info)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token_info?.access_token}`,{
    headers:{
      Authorization:`Bearer ${token_info?.access_token}`,
      Accept:'Application/json'
    }
  }).then((resp) => {
     console.log(resp);
     //we will store these value or user info into local storage
     localStorage.setItem('user',JSON.stringify(resp.data));
     setopenDialog(false);
     OnGenerateTrip();
  });
}

  //  to save our ai trip by taking result data from Ongenerate Trip and call inside it
  const SaveTrip = async (Trip_Details) => { 

// Add a new document in collection "cities"

    setloading(true);
  
    // Now we have to store time - we will use this as document ID
    const docId = Date.now().toString();
  
    // To get the mail and all info of the user
    const user = JSON.parse(localStorage.getItem('user'));
  
    // Debugging: Log the Trip_Details before parsing
    console.log('Trip_Details before parsing:', Trip_Details);
  
    let parsedTripDetails;
    try {
      parsedTripDetails = JSON.parse(Trip_Details);
    } catch (error) {
      console.error('Error parsing Trip_Details:', error.message);
      toast.error('Failed to parse trip details. Please try again.');
      // eslint-disable-next-line no-undef
      setloading(false);
      return;
    }
  
    await setDoc(doc(db, 'AITrips', docId), {
      userSelection: formData,
      tripData: JSON.parse(Trip_Details), // Store this as JSON
      userEmail: user?.email,
      id: docId
    });
  
    setloading(false);
    // Now our trip is saved, we need to navigate to the new page
    navigate(`/view-trip/${docId}`);
  };

  return (
    
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl animate-fade-in text-sky-800'>Share Your Travel Style, We'll Handle the Rest!😊🏕️</h2>
      <p className='mt-3 font-bold text-black text-xl'>Tell Us Your Travel Style, We'll Design Your Perfect Getaway.</p>
      
      
      <div className='mt-20 flex flex-col gap-10'>

         <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of your choice✈️ ?</h2>
          <Input placeholder={'Ex. Mumbai,India'} type='text' onChange={(v)=>{setplace(v);handleInputChange('location',v.target.value)}} />
        </div> 
        


         <div>
        <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip⌛ ?</h2>
        <Input placeholder={'Ex. 2'} type='number' 
        onChange={(e)=>handleInputChange('nOofdays',e.target.value)}/>
        </div> 


        <div>
        <h2 className='text-xl my-3 font-medium'>What is your Budget💷 ?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {/* we will use map to list our Budget Options */}
        
          {SelectBudgetOptions.map((item,index)=>(
            <div key={index} 
            onClick={()=>handleInputChange('budget',item.title)}

            
            className={`p-6 border rounded-lg cursor-pointer transform transition-all 
              ${formData?.budget === item.title ? 'shadow-lg border-black' : ''}
              hover:shadow-2xl hover:scale-105`} // Hover effect for shadow and slight enlargement
             style={{
                      backgroundColor: item.title === 'Cheap' ? '#28a745' :  // Green for Cheap
                    item.title === 'Moderate' ? '#ffc107' : // Yellow for Moderate
                    item.title === 'Expensive' ? '#dc3545' : '', // Red for Expensive
                    color: 'white' 
                  }}>

               <h2 className="text-5xl mb-4">{item.icon}</h2> 
               <h2 className="font-bold text-xl mb-2">{item.title}</h2> 
              <h2 className="text-sm opacity-80">{item.desc}</h2> 
              </div>
                ))}
             </div> 
       

 
      <div className="mt-10">
        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?👨‍👩‍👧</h2>
        <div className='flex flex-wrap gap-6 mt-5 justify-center'>
          {/* we will use map to list our  Traveler Info */}
          {SelectTravelesList.map((item,index)=>(
            <div key={index} 
            onClick={()=>handleInputChange('traveler',item.people)}
            // className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
            //   ${formData?.traveler==item.people && 'shadow-lg border-black'}`}
            className={`relative p-6 border rounded-lg cursor-pointer transform transition-all duration-300 
              bg-white hover:bg-gradient-to-r from-sky-100 to-indigo-300 text-black
              hover:shadow-2xl hover:scale-105 flex flex-col items-center
              ${formData?.traveler === item.people ? 'shadow-lg border-black' : ''}`} 
             style={{
            minWidth: '200px', // Ensuring a consistent card width
            borderRadius: '20px', // Softer, rounded corners
               }}>
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-gray-200">
          <h2 className="text-5xl">{item.icon}</h2> {/* Larger icon/avatar */}
        </div>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-400'>{item.desc}</h2>
            </div>
          ))}
        </div>  
        </div>
      </div>  
    </div>


    <div className='my-10 justify-end flex'>
    <Button
  disabled={loading}
  onClick={OnGenerateTrip}
  className={`bg-[#FF8C00] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition duration-300 ease-in-out ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
>
  {loading ? <RiLoader2Line className="h-7 w-7 animate-spin" /> : "Generate Trip"}
</Button>

</div>



    {/* dialog box */}
    <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription>
        <img src='/flytrip.png' className="w-40 h-auto ml-[34%]" />
      </DialogDescription>
      <h2 className='font-bold text-lg mt-5'>Sign In with Google</h2>
      <p>Sign In to the App with Google Authentication securely</p>

      <Button
       className='w-full mt-7 flex gap-2 items-center' 
       onClick={login}>
        <FcGoogle className='h-6 w-6' />
        Sign In With Google
      </Button>


    </DialogHeader>
  </DialogContent>
</Dialog>



  </div>
  
  )
}


export default CreateTrip