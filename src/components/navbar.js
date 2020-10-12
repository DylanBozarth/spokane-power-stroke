import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const Nav = () => (
  <div className="navbarmaster">
    <>
      <div className="row">
        
          <NavLink to="/" className="">
           
              <img
                alt=""
                src="./images/logotext.png"
                width="210"
                height="170"
                className="icon"
              />{" "}
           
         </NavLink>{" "}
        
           
          

        <div className="underbar row">
          <NavLink to="/">
            {" "}
            <Navbar.Brand className="navbaritem">
              <p className="navbarcolor">Services</p>
            </Navbar.Brand>
          </NavLink>
          <NavLink to="/about">
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

          <NavLink to="/contact">
            {" "}
            <Navbar.Brand className="navbaritem">
              <p className="navbarcolor">Contact Us</p>
            </Navbar.Brand>
          </NavLink>
        </div>
      </div>
    </>
  </div>
);
