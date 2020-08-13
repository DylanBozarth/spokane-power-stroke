import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from 'react-bootstrap/Image'
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
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
      <Image className="mapimage" src="./images/map.png" fluid></Image>
      <p className="contactinfo">
        <i className="fa fa-phone" aria-hidden="true"></i> (509) 879-0391 <br />
        <i className="fa fa-map-marker" aria-hidden="true"></i> 2833 N Pittsburg
        St, Spokane, WA 99207
        <br />
        <i className="fa fa-envelope" aria-hidden="true"></i>
        Email @goes here
      </p>
    </Container>
  </motion.div>
);
