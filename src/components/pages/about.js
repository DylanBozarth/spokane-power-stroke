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

export const About = () => (
  <motion.div
    className="aboutpage"
    initial="exit"
    animate="enter"
    exit="exit"
    variants={backVariants}
  >
   
      <div className="row">
        <div className="col-lg-4">
          <img className="img-fluid homecard" src="./images/brandon.jpg" alt="Brandon" />

          <h4 className="card-title">Brandon Bozarth</h4>
          <img className="img-fluid homecard" src="./images/brandoncert.jpg" alt="cert" />

        </div>
        <div className="col-lg-4">
          <img className="img-fluid homecard" src="./images/undertable.jpg" alt="Dustin" />

          <h4 className="card-title">Dustin Andersen</h4>
          <img className="img-fluid homecard" src="./images/dustincert.jpg" alt="Cert" />
        </div>
        <div className="col-lg-4">
          <img className="img-fluid homecard" src="./images/office.jpg" alt="Alvin" />

          <h4 className="card-title">Alvin Finch</h4>
          <img className="img-fluid homecard" src="./images/alvincert.jpg" alt="cert" />
          
        </div>
      </div>
    
  </motion.div>
);
