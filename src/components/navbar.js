import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => (
  <div className="navbarmaster ">
    <div className=" logocontainer">
      <NavLink to="/">
        <div>
          <img alt="" src="./images/logotext.png" className=" " />{" "}
        </div>
      </NavLink>{" "}
    </div>
    <div className="container-fluid">
      <div className="row ">
        {" "}
        <div className="navbaritem col-sm">
          <NavLink to="/">
            <p className="navbarcolor">Services</p>
          </NavLink>{" "}
        </div>
        <div className="navbaritem  col-sm">
          {" "}
          <NavLink to="/about">
            <p className="navbarcolor">About Us</p>
          </NavLink>
        </div>{" "}
        <div className="navbaritem col-sm">
          <NavLink to="/reviews">
            <p className="navbarcolor">Reviews</p>
          </NavLink>{" "}
        </div>{" "}
        <div className="navbaritem col-sm">
          <NavLink to="/contact">
            <p className="navbarcolor">Contact Us</p>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);
