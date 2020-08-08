import React from 'react';
import {  NavLink } from "react-router-dom";
import {  Navbar, Container} from 'react-bootstrap';

export const Nav = () => (
    <div className="navbarmaster">
        <Navbar expand="lg" variant="light" bg="light"> 
  <Container><img width="50" height="50" src="/images/logo.jpg"></img><h1 className="maintitle">Spokane power stroker</h1>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Container>
</Navbar>
    </div>
)