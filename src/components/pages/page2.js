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

export const Page2 = ({ match }) => (
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
      <h1 className="focusheader">Gas engine repair</h1>
      <Row className="justify-content-md-center">
        <motion.img
          variants={imageVariants}
          src={"../images/rotor.jpg"}
          alt="image"
          className="focusimage"
        />
      </Row>{" "}
      <Row className="justify-content-md-center">
        <Col className="focustext">
        We also are very proficent in servicing Gas engine vehicles from engine installs to driveability and maintence.
          <NavLink to="/contact" className="focuscontactus"><div className="focuscontactus">Contact us today!</div></NavLink>
        </Col>
      </Row>
    </motion.div>
  </Container>
);
