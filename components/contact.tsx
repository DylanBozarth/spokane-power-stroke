import {useEffect} from 'react'
import { gsap} from "gsap";
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const Contact = (props: any) => {
  gsap.registerPlugin(ScrollTrigger);

 const changeTheBar = () => {
  props.setActive(4)
 
  
}
const resetTheBar = () => {
  props.setActive(3)
}

  return (
    <div className="contact">
<div className="text-center font-bold">
<FontAwesomeIcon icon={faPhone} /> (509) 879-0391 
<br /> 
 <FontAwesomeIcon icon={faMapMarker} /> 2833 N Pittsburg St, Spokane, WA 99207
<br /> <FontAwesomeIcon icon={faEnvelope} /> Spokanepowerstroke@gmail.com</div>
      <div className="mapContainer">
      <iframe
        loading="lazy"
        className="map"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ98syR9EYnlQRSH85A1eUgVM&key=AIzaSyB9sySkqSx67a7l8pEhGxlxxLdP2hcnpWY"
      ></iframe> </div> 
    </div>
  );
};
// When we are open and not
