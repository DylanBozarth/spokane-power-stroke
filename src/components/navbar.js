import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export const Nav = () => (
  <div className="navbarmaster">
    <>
      <Navbar className="upperbar">
        <NavLink to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="./images/logonew.png"
              width="110"
              height="105"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </NavLink>{" "}
        <NavLink to="/">
          <p className="maintitle">Spokane Power Stroke</p>
        </NavLink>
      </Navbar>
      
      <div className="underbar">
        <NavLink to="/">
          {" "}
          <Navbar.Brand className="navbaritem">
            <p className="navbarcolor">Services</p>
          </Navbar.Brand>
        </NavLink>
        <NavLink to="/reviews">
          {" "}
          <Navbar.Brand className="navbaritem">
            <p className="navbarcolor">Reviews</p>
          </Navbar.Brand>{" "}
        </NavLink><NavLink to="/about">
          <Navbar.Brand className="navbaritem">
            <p className="navbarcolor">About Us</p>
          </Navbar.Brand>
        </NavLink>
        
        <NavLink to="/contact">
          {" "}
          <Navbar.Brand className="navbaritem">
            <p className="navbarcolor">Contact Us</p>
          </Navbar.Brand>
        </NavLink>
      </div>
    </>
  </div>
);
