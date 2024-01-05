// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './CustomNavbar.css'

const mystyle = {
  fontSize: '24px',
  padding: '20px',
  color: 'black',
};

function CustomNavbar () {
    return (
      <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={mystyle}>
              <Nav.Link as={Link} to="/moviespage">
                Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutme">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }


export default CustomNavbar;
