import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export const Nav = () => (
  <div className="navbarmaster">
    <Container className="upperbar">
      <Navbar expand="lg">
        <NavLink to="/">
          <img
            className="navbarlogo"
            width="70"
            height="70"
            src="/images/logo.jpg"
          ></img>
        </NavLink>
        <h1 className="maintitle navbaritem">Spokane power stroke</h1>
      </Navbar>
    </Container>
    <Container className="underbar justify-content-center" activeKey="/home">
      
      <NavLink to="/contact">
        <Navbar.Brand className="navbaritem">
          <p className="navbarcolor">Contact Us</p>
        </Navbar.Brand>
      </NavLink>
      <NavLink to="/about">
        {" "}
        <Navbar.Brand className="navbaritem">
          <p className="navbarcolor">About Us</p>
        </Navbar.Brand>
      </NavLink>
      <NavLink to="/reviews">
        {" "}
        <Navbar.Brand className="navbaritem">
          <p className="navbarcolor">Reviews</p>
        </Navbar.Brand>{" "}
      </NavLink>
    </Container>
  </div>
);
