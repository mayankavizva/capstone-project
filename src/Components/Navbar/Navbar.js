import React from 'react'
import '../Navbar/Navbar.css'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Container,Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default function Navbar22() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  // const open = Boolean(anchorEl)
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleaboutClose = () => {
  //   setAnchorEl(null)
  // }

  return (
    <div className="navbar">
      <Navbar id="navbar-container"collapseOnSelect expand="md" bg="#f3f1f5" variant="dark">
        <Container>
          <Navbar.Brand id="navbar-brand" href="/home">EZInsure</Navbar.Brand>
          <Navbar.Toggle id="toggler" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#" style={{color:"black"}}>Services</Nav.Link>
              <Nav.Link href="/Contactus" style={{color:"black"}}>Contact Us</Nav.Link>
              <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item style={{color:"black"}} href="#">Mission</NavDropdown.Item>
                <NavDropdown.Item style={{color:"black"}} href="#">Vision</NavDropdown.Item>
                <NavDropdown.Item style={{color:"black"}} href="#">Work Culture</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link style={{color:"black"}} href="/login">Login</Nav.Link>
              <Nav.Link style={{color:"black"}} eventKey={2} href="/signup">
              SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
