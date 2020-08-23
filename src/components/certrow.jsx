import React, { Component, Fragment } from "react";
import Expand from "react-expand-animated";

import { Container, Col, Row, Card } from "react-bootstrap";

class Certrow extends Component {
  state = { open: false };

  toggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.toggle}>Show certification</button>
        <Expand open={this.state.open}>
          <Row>
            <Card style={{ width: "25rem", padding: "0px" }}>
              <Card.Img
                variant="top"
                src="./images/alvincert.jpg"
                alt="person"
              />
              <Card.Body>
                <Card.Title className="centertext">Brandon Bozarth</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", padding: "0px" }}>
              <Card.Img
                variant="top"
                src="./images/alvincert.jpg"
                alt="person"
              />
              <Card.Body>
                <Card.Title className="centertext">Brandon Bozarth</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", padding: "0px" }}>
              <Card.Img
                variant="top"
                src="./images/alvincert.jpg"
                alt="person"
              />
              <Card.Body>
                <Card.Title className="centertext">Brandon Bozarth</Card.Title>
              </Card.Body>
            </Card>
          </Row>
        </Expand>
      </Fragment>
    );
  }
}

export default Certrow;
