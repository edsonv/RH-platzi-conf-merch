import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4267261, lng: -99.1718796
  }
  return (
    <LoadScript googleMapsApiKey='AIzaSyBuAdJPDSZEfLNGZm-f2AqVXnO5IezhGaw' >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map