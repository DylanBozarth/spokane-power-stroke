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
/* .non-contact {
  position: absolute;
}
.mapContainer {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 50vh;
}

.map {
 position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
} */
  return (
    <div className="w-full h-full  inset-0">
<div className="text-center font-bold">
 (509) 879-0391 
<br /> 
 2833 N Pittsburg St, Spokane, WA 99207
<br />  Spokanepowerstroke@gmail.com</div>
      <div className="">
      <iframe
        loading="lazy"
        className="w-full h-1/2"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ98syR9EYnlQRSH85A1eUgVM&key=AIzaSyB9sySkqSx67a7l8pEhGxlxxLdP2hcnpWY"
      ></iframe> </div> 
    </div>
  );
};
// When we are open and not
