import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export const Nav = () => (
  <div className="navbarmaster">
    <Navbar expand="lg" variant="light" bg="light">
      <NavLink to="/">
        <img
          className="navbarlogo"
          width="70"
          height="70"
          src="/images/logo.jpg"
        ></img>
        <img
          className="navbarlogo"
          width="100"
          height="60"
          src="/images/fordicon.png"
        ></img></NavLink>
        <h1 className="maintitle navbaritem">Spokane power stroke</h1>
      
      <NavLink to="/">
        <Navbar.Brand className="navbaritem">
          <p className="navbarcolor">Navbar</p>
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
        </Navbar.Brand>
      </NavLink>
    </Navbar>
  </div>
);
