import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {CertTab} from "../CertTab";


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
            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nWJ2u-pu32Qe8dZlNEsdlQAAAA%26pid%3DApi&f=1" alt="person" />
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
            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fman-writing-an-estimate-or-delivery-person-picture-id121200247%3Fk%3D6%26m%3D121200247%26s%3D170667a%26w%3D0%26h%3Dg0pva7ZQOEi6r1V8xhRqw1GZcRi3uRjaNfBQxzCXjYg%3D&f=1&nofb=1" alt="person" />
            <Card.Body>
              <Card.Title className="centertext">Alvin Finch</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
           
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.websitebuilder.prositehosting.co.uk%2Ffasthosts11160%2Fimage%2Ftreadmill_repair_man_cut_out.jpg&f=1&nofb=1" alt="person" />
            <Card.Body>
              <Card.Title className="centertext">Dustin Anderson</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>
        <CertTab />
      </Row>
    </Container>
  </motion.div>
);
