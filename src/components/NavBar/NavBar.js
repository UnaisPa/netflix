import React from "react";
import "./navbar.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
const NavBar = () => {
  return (
    <div className="">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home"><img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        /></Navbar.Brand>
          
          <Navbar.Toggle style={{color:"#111"}} ><i style={{color:"white"}} className="fa-solid fa-bars"></i></Navbar.Toggle>
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  className="nav-element" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-element" href="#link">TV</Nav.Link>
              <Nav.Link className="nav-element" href="#link">Movies</Nav.Link>
              <Nav.Link className="nav-element" href="#link">My List</Nav.Link>

            </Nav>
            <img className="img-fluid avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="img" />

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
