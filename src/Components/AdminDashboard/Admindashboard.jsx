import React, { useContext, useEffect, useState } from 'react';
import Adminchild from '../Adminchild/Adminchild';
import Mapdemo from '../Mapdemo/Mapdemo';
import { DetailsCOntext } from '../../Contexts/Details';
import axios from 'axios';

function UsersDashboard() {
  const [admin, setAdmin] = useContext(DetailsCOntext);
  const [showMap, setShowMap] = useState(false);
  const [sweepers, setSweepers] = useState([]);
  const [center, setCenter] = useState({});

  const getDetails = async () => {
    try {
      const res = await axios.post('http://localhost:4000/vehicles-api/vehicles', admin);
      // Check the structure of the response and access vehicles accordingly
      setSweepers(res.data.vehicles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handleMapView = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  // Define an array to store center coordinates
  const centers = [];

  // Map over the sweepers array to populate the centers array
  const adminChildren = sweepers.map((sweeper, index) => {
    // Extract lat and lng from the sweeper object
    const lat = sweeper.Lat;
    const lng = sweeper.Lng;

    // Push the center coordinates to the centers array
    centers.push({ lat, lng });

    // Return the Adminchild component
    return (
      <div key={index}>
        <Adminchild sweeper={sweeper} key={index} center={{ lat, lng }} />
      </div>
    );
  });

  // After the loop, update the center state with the aggregated data
  useEffect(() => {
    if (centers.length > 0) {
      setCenter(centers[0]); // Assuming you only need one center here
    }
  }, [sweepers]);
  console.log(admin)
  return (
    <div className='bg-gray-100'>
      <h1 className='text-2xl mx-20 border-b-2 py-5 border-green-500'>DASHBOARD</h1>
      <div>
        <div className='flex p-6'>
          <h1 className='text-green-600 text-xl ml-20 w-[50%]'>Area : {admin.Area}</h1>
          <h1 className='text-green-600 text-xl m-auto w-[50%]'>Pincode : {admin.Pincode}</h1>
        </div>
        <button className='bg-green-500 hover:text-white p-3 text-xl rounded-full m-3 transform origin-center transition-transform duration-400 hover:scale-[102%]' onClick={handleMapView}>MAP VIEW</button>
      </div>
      {showMap && (
        <div className="modal">
          <div className="modal-content">
            <Mapdemo handleCloseMap={handleCloseMap} />
            <button className='bg-green-500 m-3 p-4 rounded-full w-20 text-white' onClick={handleCloseMap}>Close</button>
          </div>
        </div>
      )}
      {adminChildren}
    </div>
  );
}

export default UsersDashboard;
