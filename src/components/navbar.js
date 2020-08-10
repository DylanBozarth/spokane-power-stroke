import React from 'react';
import {  NavLink} from "react-router-dom";
import {  Navbar, Container} from 'react-bootstrap';

export const Nav = () => (
    <div className="navbarmaster">
        <Navbar expand="lg" variant="light" bg="light"> 
  <img className="navbarlogo" width="70" height="70" src="/images/logo.jpg"></img><img  className="navbarlogo" width="50" height="80" src="/images/fordicon.png"></img><h1 className="maintitle navbaritem">Spokane power stroke</h1>
    <NavLink to="/"><Navbar.Brand className="navbaritem" ><p className="navbarcolor">Navbar</p></Navbar.Brand></NavLink>
    <NavLink to="/"> <Navbar.Brand className="navbaritem"  ><p className="navbarcolor">About Us</p></Navbar.Brand></NavLink>
    <NavLink to="/"> <Navbar.Brand className="navbaritem"  ><p className="navbarcolor">Reviews</p></Navbar.Brand></NavLink>
   
 
</Navbar>
    </div>
)