import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

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
  <Container className="innerpage">
    <motion.div
      className="single focuspage"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <motion.div className="back" variants={backVariants}>
        <Link to="/" className="back">
          ← Back
        </Link>
      </motion.div>
      <h1 className="focusheader">Steering system repair</h1>
      <Row className="justify-content-md-center">
        <motion.img
          variants={imageVariants}
          src={"../images/steering.jpg"}
          alt="image"
          className="focusimage"
        />
      </Row>{" "}
      <Row className="justify-content-md-center">
        <Col className="focustext">
       Does your Truck or car's steering not feel quite right?  Or makes noise? We can fix it.
          <NavLink to="/contact" className="focuscontactus"><div className="focuscontactus">Contact us today!</div></NavLink>
        </Col>
      </Row>
    </motion.div>
  </Container>
);
