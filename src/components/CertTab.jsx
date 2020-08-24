import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Row, Card } from "react-bootstrap";

import React from "react";
export const CertTab = () => (
  <Tabs>
    <TabList>
      <Tab>Brandon's Certifications</Tab>
      <Tab>Alvin's Certifications</Tab>
      <Tab>Dustin's Certifications</Tab>
    </TabList>

    <TabPanel>
      <Row>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </TabPanel>

    <TabPanel>
      <Row>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </TabPanel>
    <TabPanel>
    <Row>
        <Card style={{ width: "14rem"}}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="./images/alvincert.jpg" alt="person" />
          <Card.Body>
            <Card.Title className="centertext">Some place LLC</Card.Title>
            <Card.Text>2020 he did gud</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </TabPanel>
  </Tabs>
);
