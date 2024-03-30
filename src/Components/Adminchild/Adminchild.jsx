import React, { useState,useEffect} from 'react';
import { MdModeEdit } from "react-icons/md";
import DisplayMap from '../Map/DisplayMap';
import './Adminchild.css';
import Detailsimg from '../Detailsimg/Detailsimg';
import Tooltip from '../Tooltip/Tooltip';
import axios from 'axios';
function Adminchild(props) {
    const [showMap, setShowMap] = useState(false);
    let [driver,setdriver]=useState('')
    let [driverpno,setdriverpno]=useState('')
    
    const getDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/drivers-api/driver/${props.sweeper.DriverName}`);
        // Check the structure of the response and access vehicles accordingly
        setdriver(res.data.driver.DriverImg)
        setdriverpno(res.data.driver.MobileNo)
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      getDetails();
    }, []);
    console.log(props.sweeper)

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
               <Detailsimg vehicleUrl={props.sweeper.VehicleImg} driverUrl ={driver} />
            </div>
                {/* <img src={props.driver.url} className='h-60 w-96 m-auto'></img> */}
           
            <div className='w-72'>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Driver :</h1>
                    <h1 className='m-2 text-lg '>{props.sweeper.DriverName}</h1>
                </div>
                <div className='flex ' >
                    <h1 className='text-green-600 m-2  font-semibold  '>Mobile No :</h1>
                    <h1 className='m-2'>7013108405</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Vehicle No :</h1>
                    <h1 className='m-2'>{props.sweeper.VehicleNumber}</h1>
                </div>
               <div className='flex'>
                    <h1 className='text-green-600 m-2 font-semibold  '>Status:</h1>
                    <h1 className='m-2'>{props.sweeper.Status}</h1>
                </div> 
                <div className='flex'>
                <Tooltip/>
                    <h1 className='text-green-600 m-2 font-semibold  ' >Storage:</h1>
                    {props.sweeper.Storage.map((compartment, index) => (
  <div  key={index}> 
  
    <h1 className='m-2'>{compartment.Percentage}%</h1>

  </div>
))}
                 
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