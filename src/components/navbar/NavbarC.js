import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FatherNavSC } from './styles';

const NavbarC = () => {
  return (
    <FatherNavSC>  
      <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Miravalle App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Description</Nav.Link>
            <Nav.Link href="#link">Location</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </FatherNavSC>
  )
}

export default NavbarC