import * as React from 'react';
import { useState,useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import './map.css'


const MyMap = ({latitudeLongitude}) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: latitudeLongitude[1],
    longitude: latitudeLongitude[0],
    zoom: 8
  });

    useEffect(()=>{
      setViewport({
        width: 400,
        height: 400,
        latitude: latitudeLongitude[1],
        longitude: latitudeLongitude[0],
        zoom: 8
      })
    },[latitudeLongitude])
  
  return (
      <ReactMapGL className="map-gl"
      width="100vw"
      height="100vh"
      margin-left="400px"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
    /> 
    );
}
 
export default MyMap;