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

    <TabPanel className="row certrow">
      
      <div className="col-sm-4">
        <img width="200px" height="300px" src="./images/alvincert.jpg"></img>
        <h1>cetifications</h1>
      </div>
      <div className="col-sm-4">
        <img width="200px" height="300px" src="./images/alvincert.jpg"></img>
        <h1>cetifications</h1>
      </div>
      <div className="col-sm-4">
        <img width="200px" height="300px" src="./images/alvincert.jpg"></img>
        <h1>cetifications</h1>
      </div>
 
    </TabPanel>
    <TabPanel>
      <div className="col-sm-12">
        <img width="200px" height="300px" src="./images/alvincert.jpg"></img>
        <h1>cetifications</h1>
      </div>
   
    </TabPanel>
    <TabPanel>
      <div className="col-sm-12">
        <img width="200px" height="300px" src="./images/alvincert.jpg"></img>
        <h1>cetifications</h1>
      </div>
   
    </TabPanel>
  </Tabs>
);
