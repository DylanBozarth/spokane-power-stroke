import * as React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const Page4 = ({ match }) => (
  <div className="innerpage container">
    <motion.div
      className="single focuspage"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <motion.div className="back" variants={backVariants}>
        <NavLink to="/" className="back">
          ← Back
        </NavLink>
      </motion.div>
      <h1 className="focusheader">Steering system repair</h1>
      <div className="justify-content-md-center row">
        <motion.img
          variants={imageVariants}
          src={"../images/steering.jpg"}
          alt="image"
          className="focusimage"
        />
      </div>{" "}
      <div className="justify-content-md-center row">
        <div className="focustext">
       Does your Truck or car's steering not feel quite right?  Or makes noise? We can fix it.
          <NavLink to="/contact" className="focuscontactus"><div className="focuscontactus">Contact us today!</div></NavLink>
        </div>
      </div>
    </motion.div>
  </div>
);
