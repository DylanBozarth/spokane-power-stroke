import React from "react";
import { motion } from "framer-motion";
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
};

export const Contact = () => (
  <motion.div
    className="mysingle "
    initial="exit"
    animate="enter"
    exit="exit"
    variants={backVariants}
  >
    <div className=" container-fluid text-center contactpage">
      <p className="contactinfo ">
        <i className="fa fa-phone" aria-hidden="true"></i> (509) 879-0391 <br />
        <i className="fa fa-map-marker" aria-hidden="true"></i> 2833 N Pittsburg
        St, Spokane, WA 99207
        <br />
        <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
        Spokanepowerstroke@gmail.com
      </p>

      <div className="map-container">
      <div>
      <div>
     <iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=47.68442596126309~-117.38606404275737&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no" title="map">
     </iframe>
     
</div>
     
</div>
      </div>
    </div>
  </motion.div>
);
