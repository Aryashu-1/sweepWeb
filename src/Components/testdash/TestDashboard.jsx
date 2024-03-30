import React, { useState,useEffect, useContext} from 'react';
import { MdModeEdit } from "react-icons/md";
import DisplayMap from '../Map/DisplayMap';
import { DetailsCOntext } from '../../Contexts/Details';


function TestDashboard() {
  const [showMap, setShowMap] = useState(false);
  const [center, setCenter] = useState({});
 let [admin,setAdmin] = useContext(DetailsCOntext)
 console.log(admin)


const handleTrackVehicle = () => {
  setShowMap(true);
};

const handleCloseMap = () => {
  setShowMap(false);
};
const handleMapView = () => {
  setShowMap(true);
};
useEffect(() => {
  setCenter({ "lat": 19.076, "lng": 72.8777 });
}, []);

  return (
   

<div className='bg-gray-100'>
<h1 className="text-3xl font-bold text-center text-green-600 mb-8 mr-12">Profile</h1>
<div>
         <div className='flex overflow-hidden transform origin-center transition-transform duration-400  hover:scale-[102%] border-2 bg-white shadow-lg shadow-gray-500 rounded-[16px]  m-10 h-[18rem] '>
            <div className='mr-6 h-full  w-[300px] bg-green-600 object-cove'>
               <img className='h-full w-full' src="data:image/jpeg;base64,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" alt=""></img>
            </div>
                {/* <img src={props.driver.url} className='h-60 w-96 m-auto'></img> */}
           
            <div className='w-72'>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Name :</h1>
                    <h1 className='m-2 text-lg '>{admin.name}</h1>
                </div>
                <div className='flex ' >
                    <h1 className='text-green-600 m-2  font-semibold  '>Area :</h1>
                    <h1 className='m-2'>{admin.Area}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Pincode :</h1>
                    <h1 className='m-2'>{admin.Pincode}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Sweepers Count :</h1>
                    <h1 className='m-2'>50</h1>
                </div>
                
            </div>
          
            <div className='h-[18rem]'>
            <DisplayMap handleCloseMap={handleCloseMap} center ={center} />
            </div>
            
            
        </div>
        {showMap && (
        <div className="modal">
          <div className="modal-content">
            <DisplayMap handleCloseMap={handleCloseMap} center ={center} />
            <button className='bg-green-500 m-3 p-4 rounded-full w-20 text-white' onClick={handleCloseMap}>Close</button>
          </div>
        </div>
      )}
    </div>



      
        <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Vehicle Information */}
          <div className="bg-white  p-6 transform origin-center transition-transform duration-400  hover:scale-[102%] border-2  shadow-lg shadow-gray-500 rounded-[16px]">
            <h2 className="text-lg font-semibold mb-4 text-green-600">Vehicle Information</h2>
            <p className="mb-2">Total Vehicles: 50</p>
            <p className="mb-2">Active Vehicles: 45</p>
            <p>Inactive Vehicles: 5</p>
          </div>

          {/* Card 2: Waste Collection Statistics */}
          <div className="bg-white  p-6 transform origin-center transition-transform duration-400  hover:scale-[102%] border-2  shadow-lg shadow-gray-500 rounded-[16px]">
            <h2 className="text-lg font-semibold mb-4 text-green-600">Waste Collection Statistics</h2>
            <p className="mb-2">Total Waste Collected: 150 tons</p>
            <p className="mb-2">Recyclable Waste: 80 tons</p>
            <p>Non-Recyclable Waste: 70 tons</p>
          </div>

          {/* Card 3: Revenue */}
          <div className="bg-white  p-6 transform origin-center transition-transform duration-400  hover:scale-[102%] border-2  shadow-lg shadow-gray-500 rounded-[16px]">
            <h2 className="text-lg font-semibold mb-4 text-green-600">Revenue</h2>
            <p className="mb-2">Total Revenue: INR 5,00,000</p>
            <p>Projected Revenue: INR 7,00,000</p>
          </div>
          
          {/* Card 4: Waste Segregation Rate */}
          <div className="bg-white  p-6 transform origin-center transition-transform duration-400  hover:scale-[102%] border-2  shadow-lg shadow-gray-500 rounded-[16px]">
            <h2 className="text-lg font-semibold mb-4 text-green-600">Waste Segregation Rate</h2>
            <p className="mb-2">Overall Segregation Rate: 70%</p>
            <p>Monthly Improvement: 5%</p>
          </div>

          {/* Card 5: Vehicle Maintenance */}
          <div className="bg-white  p-6 transform origin-center transition-transform duration-400  hover:scale-[102%] border-2  shadow-lg shadow-gray-500 rounded-[16px]">
            <h2 className="text-lg font-semibold mb-4 text-green-600">Vehicle Maintenance</h2>
            <p className="mb-2">Average Maintenance Cost: INR 10,000</p>
            <p>Most Common Issues: Tire Replacement, Battery Check</p>
          </div>

          {/* Card 6: Customer Feedback */}
          <div className="bg-white  p-6 transform origin-center transition-transform duration-400  hover:scale-[102%] border-2  shadow-lg shadow-gray-500 rounded-[16px]">
            <h2 className="text-lg font-semibold mb-4 text-green-600">Customer Feedback</h2>
            <p className="mb-2">Overall Satisfaction: 4.5/5</p>
            <p>Areas of Improvement: Timely Pickup, Communication</p>
          </div>

          {/* Add more cards as needed */}

        </div>
      </div>
    </div>


    </div>
  )
}

export default TestDashboard

  