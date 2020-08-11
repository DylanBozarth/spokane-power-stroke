import React from 'react';
import {  Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export const Reviews = ({ match }) => (
    <motion.div className="mysingle" initial="exit" animate="enter" exit="exit">
      
      
      <Container >
<Row>
    <Col ><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/stars.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card></Col>
    <Col ><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/stars.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card></Col>
    <Col ><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/stars.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  </Row>
  </Container>
       
      </motion.div>
    
  );