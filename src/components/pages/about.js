import React from "react";
import { motion } from "framer-motion";
import {CertTab} from "../CertTab";

import { Container, Col, Row } from "react-bootstrap";

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
    className="mysingle"
    initial="exit"
    animate="enter"
    exit="exit"
    variants={backVariants}
  >
    <div className="container-fluid aboutpage">
      <div className="row">
      <div className="col-md-4 ">
        <div className="card">
          <img className=" img-fluid" src="./images/brandon.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">Brandon Bozarth</h4>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <img className=" img-fluid" src="./images/undertable.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">Dustin Anderson</h4>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           
          </div>
        </div>
      </div>
      <div className=" col-md-4 ">
        <div className="card">
          <img className=" img-fluid" src="./images/office.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">Alvin Finch</h4>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           
          </div>
        </div>
      </div>
      </div><CertTab /></div>
  </motion.div>
);
