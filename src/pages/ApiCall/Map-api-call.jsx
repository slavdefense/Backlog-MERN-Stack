import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MyMap from '../../components/Map/map';


const ApiCall = (props) => {

//need officeLocation 
  
const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"

const [locationForApi,setLocationForApi] = useState(props.wantedData)
const[latitudeLongitude,setLatitudeLongitude] =useState([])




// useEffect(()=>{
//   setLatLongt(props.wantedData)
//   console.log(latLongt)
// },[])


useEffect(()=>{
  axios.get(`${BASE_URL}${locationForApi}.json?access_token=${process.env.REACT_APP_API_KEY}&limit=1`)
  .then((data)=>{

    setLatitudeLongitude(data.data.features[0].geometry.coordinates)
    // console.log( typeof data.data.features[0].geometry.coordinates.reverse())

  },[])
})


  return ( 
    <div>

      
     <MyMap latitudeLongitude={latitudeLongitude}/>
      

      
    </div>



   );
}
 
export default ApiCall;