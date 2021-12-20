import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../Navbar/Navbar.css'
export default function Navbar22() {

  return (
    <div className="navbar">
      <Navbar id="navbar-container" collapseOnSelect expand="md" bg="#f3f1f5" variant="dark">
        <Container>
          <Navbar.Brand id="navbar-brand" href="/home">EZInsure</Navbar.Brand>
          <Navbar.Toggle id="toggler" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item id="d1" href="#">Mission</NavDropdown.Item>
                <NavDropdown.Item id="d2" href="#">Vision</NavDropdown.Item>
                <NavDropdown.Item id="d3" href="#">Work Culture</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link  href="#" id="service-nav">Services</Nav.Link>
              <Nav.Link id="contact-nav" href="/Contactus" >Contact Us</Nav.Link>
              <Nav.Link id="premium-nav" href="/Premiumsheet">Premium Sheet</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id="login-nav" href="/login">Login</Nav.Link>
              <Nav.Link id="signin-nav" eventKey={2} href="/signup">
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
