import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Col, Row} from "react-bootstrap";

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

export const Page1 = ({ match }) => (
  <Container className="innerpage">
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
      <h1 className="centertext"> asdasd a</h1>
      <Row className="justify-content-md-center">
    <motion.img
        variants={imageVariants}
        src={"../images/rotor.jpg"}
        alt="image"
      />
   
  </Row> <Row className="justify-content-md-center"><Col className="pagetext">Hnigger djaksdjkasj dasjd</Col>
      <motion.div className="back" variants={backVariants}>
        <Link to="/" className="back">
          ← Back
        </Link>
      </motion.div></Row>
    </motion.div>
  </Container>
);
