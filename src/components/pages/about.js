import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Certrow from "../certrow";
import Brandonrow from "../certrow";
import Alvinrow from "../alvinrow";
import Dustinrow from "../dustinrow";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
};

export const About = ({ match }) => (
  <motion.div
    className="mysingle"
    initial="exit"
    animate="enter"
    exit="exit"
    variants={backVariants}
  >
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/doge.png" alt="person" />
            <Card.Body>
              <Card.Title className="centertext">Brandon Bozarth</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Brandonrow />
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/doge.png" alt="person" />
            <Card.Body>
              <Card.Title className="centertext">Alvin Finch</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Alvinrow />
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/doge.png" alt="person" />
            <Card.Body>
              <Card.Title className="centertext">Dustin Anderson</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Dustinrow />
          </Card>
        </Col>
      </Row>
    </Container>
  </motion.div>
);
