import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => (
  <div className="navbarmaster container-fluid">

        <div className='container logocontainer'>
          <NavLink to="/">
            <div>
              <img
                alt=""
                src="./images/logotext.png"
                
                className="img-fluid item"
              />{" "}
            </div>
          </NavLink>{" "}
          </div>
        
     

        <div className="row col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
          <NavLink to="/">
            {" "}
            <div className="navbaritem col">
              <p className="navbarcolor">Services</p>
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="navbaritem col">
              <p className="navbarcolor">About Us</p>
            </div>
          </NavLink>
          <NavLink to="/reviews">
            {" "}
            <div className="navbaritem  col">
              <p className="navbarcolor">Reviews</p>
            </div>{" "}
          </NavLink>

          <NavLink to="/contact">
            {" "}
            <div className="navbaritem col">
              <p className="navbarcolor">Contact Us</p>
            </div>
          </NavLink>
        </div>
    
   </div>
 
);
