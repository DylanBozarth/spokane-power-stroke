import React from "react";
import { motion } from "framer-motion";
import { Container, Col, Row, Image} from "react-bootstrap";
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
    <Container className="contactpage">
      <Row>
        <Col xs={12} md={8}>
          <Image className="" src="./images/map.png" fluid></Image>
        </Col>
        <Col >
          <p className="contactinfo">
            <i className="fa fa-phone" aria-hidden="true"></i> (509) 879-0391{" "}
            <br />
            <i className="fa fa-map-marker" aria-hidden="true"></i> 2833 N
            Pittsburg St, Spokane, WA 99207
            <br />
            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
            Spokanepowerstroke@gmail.com
          </p>
        </Col>
      </Row>
    </Container>
  </motion.div>
);
