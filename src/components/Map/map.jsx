import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './map.css'


const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 34.187042,
    longitude: -118.381256,
    zoom: 8
  });




  return (
    <div>
      <h1>This is my Map page </h1>
      <h3>{props.officeLocation}</h3>

    </div>

    

    // <ReactMapGL className="map-gl"
    // width="100vw"
    //   height="100vh"
    //   margin-left="400px"
    //   mapStyle="mapbox://styles/mapbox/dark-v9"
    //   {...viewport}
    //   onViewportChange={nextViewport => setViewport(nextViewport)}
    //   mapboxApiAccessToken={}
    // />
    );
}
 
export default Map;