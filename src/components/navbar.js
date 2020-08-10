import React from 'react';
import {  NavLink } from "react-router-dom";
import {  Navbar, Container} from 'react-bootstrap';

export const Nav = () => (
    <div className="navbarmaster">
        <Navbar expand="lg" variant="light" bg="light"> 
  <img width="50" height="50" src="/images/logo.jpg"></img><h1 className="maintitle">Spokane power stroke</h1><img width="50" height="80" src="/images/fordicon.png"></img>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
 
</Navbar>
    </div>
)