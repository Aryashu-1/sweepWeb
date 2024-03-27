import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';



const DisplayMap = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCsh8cY6jnaM1g0eLfcF9BMEVtH_pnv-gY",
  });

  const containerStyle = {
    width: '25rem',
    height: '15rem',
    margin:'auto' ,
  
  };

  return (
    <div className='p-[1.5rem]'>
      {isLoaded && (
        <GoogleMap 
          mapContainerStyle={containerStyle}
          center={props.center}
          zoom={17} 
          onClick={props.handleCloseMap}
        >
          <Marker position={props.center} />
        </GoogleMap>
      )}
    </div>
  );
}

export default DisplayMap;
