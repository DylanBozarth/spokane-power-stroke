import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Row, Card } from "react-bootstrap";

import React from "react";
export const CertTab = () => (
  <Tabs>
    <TabList>
      <Tab>Brandon's Certifications</Tab>
      <Tab>Dustin's Certifications</Tab>
      <Tab>Alvin's Certifications</Tab>
      
    </TabList>

    <TabPanel className="container-fluid">
      <div className="row">
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px"  className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>Info info fino</p>
        </div>
      </div>
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px" className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>Info info fino</p>
        </div>
      </div>
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px"  className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>Info info fino</p>
        </div>
      </div>
 </div>
    </TabPanel>
    <TabPanel className="container-fluid">
    <div className="row">
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px"  className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>Info info fino</p>
        </div>
      </div>
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px" className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>DUSTIN</p>
        </div>
      </div>
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px"  className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>DUSTIN</p>
        </div>
      </div>
 </div>
    </TabPanel>
    <TabPanel className="container-fluid">
    <div className="row">
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px"  className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>alllvin</p>
        </div>
      </div>
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px" className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>Info info fino</p>
        </div>
      </div>
      <div className=" col-sm-4 ">
        <div className="card-body">
          <img width="300px" height="300px"  className=" img-fluid" src="./images/alvincert.jpg" alt="certifictation" />
          <p>allalvinN</p>
        </div>
      </div>
 </div>
    </TabPanel>
  </Tabs>
);
