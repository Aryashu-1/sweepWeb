import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import DisplayMap from '../Map/DisplayMap';
import './Adminchild.css';
import Detailsimg from '../Detailsimg/Detailsimg';
function Adminchild(props) {
    const [showMap, setShowMap] = useState(false);
    console.log(props.driver)

  const handleTrackVehicle = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };


  return (
    <div>
         <div className='flex overflow-hidden transform origin-center transition-transform duration-400  hover:scale-[102%] border-2 bg-white shadow-lg shadow-gray-500 rounded-[16px]  m-10 h-[18rem] '>
            <div className='mr-6'>
               <Detailsimg/>
            </div>
                {/* <img src={props.driver.url} className='h-60 w-96 m-auto'></img> */}
           
            <div className='w-72'>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Driver :</h1>
                    <h1 className='m-2 text-lg '>{props.driver.Driver_Name}</h1>
                </div>
                <div className='flex ' >
                    <h1 className='text-green-600 m-2  font-semibold  '>Mobile No :</h1>
                    <h1 className='m-2'>{props.driver.Mobile_Number}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Vehicle No :</h1>
                    <h1 className='m-2'>{props.driver.Vehicle_Number}</h1>
                </div>
               <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Status:</h1>
                    <h1 className='m-2'>{props.driver.Status}</h1>
                </div> 
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  ' >Storage:</h1>
                    <h1 className='m-2'>{props.driver.Storage}</h1>
                </div>
                <div className='flex'>
              <div className='bg-green-600 hover:text-white p-4 rounded-2xl'>
              <MdModeEdit className='inline ' />
              <button className=' m-auto   '>Edit</button>
              </div>
             
              
            </div>
                
            </div>
            {/* //track vehicle button */}
            {/* <div className='flex p-10'>
                <button className='bg-green-500 m-auto p-4 rounded-full' onClick={handleTrackVehicle}>Track Vehicle</button>
            </div> */}
            <div className='h-[18rem]'>
            <DisplayMap handleCloseMap={props.handleCloseMap} center ={props.center} />
            </div>
            
            
        </div>
        {showMap && (
        <div className="modal">
          <div className="modal-content">
            <DisplayMap handleCloseMap={props.handleCloseMap} center ={props.center} />
            <button className='bg-green-500 m-3 p-4 rounded-full w-20 text-white' onClick={handleCloseMap}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Adminchild