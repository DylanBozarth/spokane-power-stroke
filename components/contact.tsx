import {useEffect} from 'react'
import { gsap} from "gsap";
export const Contact = (props: any) => {
  gsap.registerPlugin(ScrollTrigger);
  const changeTheBar = () => {
    props.setActive(4)
    
    
  }
  const NavBarChange = () => {
    ScrollTrigger.create({
      trigger: ".contact",
      onEnter: changeTheBar,
      //onLeave: resetTheBar,
      onEnterBack: changeTheBar,
    });
  }
  useEffect(() => {
    NavBarChange()
  })
  return (
    <div className=" flex contact">

      
      <div className="mapContainer">
      {/*<iframe
        loading="lazy"
        className="map"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ98syR9EYnlQRSH85A1eUgVM&key=AIzaSyB9sySkqSx67a7l8pEhGxlxxLdP2hcnpWY"
      ></iframe> */}</div> 
    </div>
  );
};
// When we are open and not
