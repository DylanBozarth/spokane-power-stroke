import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { MapContainer } from "../mapcontainer";

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
  enter: { x: 0, opacity: 1, transition: { delay: .2, ...transition } },
};

export const Contact = ({ match }) => (
  <motion.div
    className="mysingle"
    initial="exit"
    animate="enter"
    exit="exit"
    variants={backVariants}
  >
    <Container className="contactpage">
      <div className="mapcontainer"><MapContainer /></div>
        
         
          

      
    </Container>
  </motion.div>
);
