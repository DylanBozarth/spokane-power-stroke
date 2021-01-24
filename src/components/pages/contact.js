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
    className="mysingle"
    initial="exit"
    animate="enter"
    exit="exit"
    variants={backVariants}
  >
    <div className=" container">
      <p className="contactinfo ">
        <i className="fa fa-phone" aria-hidden="true"></i> (509) 879-0391 <br />
        <i className="fa fa-map-marker" aria-hidden="true"></i> 2833 N Pittsburg
        St, Spokane, WA 99207
        <br />
        <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
        Spokanepowerstroke@gmail.com
      </p>

      <div className="map-container">
        <iframe
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          title="map"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:AIzaSyBL76VUe5YTyWkIaEgtb_-1Y5ztjRuchq4"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </motion.div>
);
