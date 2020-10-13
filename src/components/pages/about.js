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
    className="container-fluid"
    initial="exit"
    animate="enter"
    exit="exit"
    variants={backVariants}
  >
    <div className=" aboutpage">
      <div className="row">
      <div className="col">
        
          <img className=" img-fluid" src="./images/brandon.jpg" alt="Brandon" />
          <div className="card-body">
            <h4 className="card-title">Brandon Bozarth</h4>
            <p className="card-text">Ford Certified Mechanic</p>
            
          
        </div>
      </div>
      <div className="col">
        
          <img className=" img-fluid" src="./images/undertable.jpg" alt="Dustin" />
          <div className="card-body">
            <h4 className="card-title">Dustin Anderson</h4>
            <p className="card-text">Ford Certified Mechanic</p>
           
          
        </div>
      </div>
      <div className="col">
        
          <img className=" img-fluid" src="./images/office.jpg" alt="Alvin" />
          <div className="card-body">
            <h4 className="card-title">Alvin Finch</h4>
            <p className="card-text">Ford Certified Mechanic</p>
           
          </div>
        
      </div>
      </div></div>
  </motion.div>
);
