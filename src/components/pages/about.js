import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from 'nuka-carousel';


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
            <Card.Img variant="top" src="./images/doge.png" />
            <Card.Body>
              <Card.Title className="centertext">Brandon Bozarth</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/doge.png" />
            <Card.Body>
              <Card.Title className="centertext">Alvin Lastname</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./images/doge.png" />
            <Card.Body>
              <Card.Title className="centertext">
                Dustin? I don't know I forgot.
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="centertext">Our certifications</h1>
      <Carousel className="aboutslider">
        <img src="./images/clowncollege.jpg" />
        <img src="./images/doge.png" />
        <img src="./images/doge.png" />
        <img src="./images/doge.png" />
        <img src="./images/doge.png" />
        <img src="./images/doge.png" />
      </Carousel>
    </Container>
  </motion.div>
);
