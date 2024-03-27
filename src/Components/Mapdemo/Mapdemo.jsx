import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 17.5406,
  lng: 78.386
};

const locations = [
    { id: 1, name: 'Location 1', position: { lat: 17.5406, lng: 78.386 }, details: 'Details of Location 1' },
    { id: 2, name: 'Location 2', position: { lat: 17.4662, lng: 78.4063 }, details: 'Details of Location 2' },
    { id: 3, name: 'Location 3', position: { lat: 17.4678, lng: 78.4045 }, details: 'Details of Location 3' },
    { id: 4, name: 'Location 4', position: { lat: 17.4501, lng: 78.3846 }, details: 'Details of Location 4' },
    { id: 5, name: 'Location 5', position: { lat: 17.4638, lng: 78.3814 }, details: 'Details of Location 5' }
  ];
  

const Mapdemo = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCsh8cY6jnaM1g0eLfcF9BMEVtH_pnv-gY",
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseInfoWindow = () => {
    setSelectedLocation(null);
  };

  return (
    <div className='w-screen'>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={handleCloseInfoWindow}
            >
              <div>
                <h3>{selectedLocation.name}</h3>
                <p>{selectedLocation.details}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
}

export default Mapdemo;
