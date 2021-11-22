import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import {
  FaHome,
  FaUser,
  FaAddressBook,
  FaHandshake,
  FaSignInAlt,
} from 'react-icons/fa'
import RegistrationPage from '../LoginRegistrationPage/RegistrationPage'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import LoginPage from '../LoginRegistrationPage/LoginPage'
import { Dropdown, ButtonGroup } from 'react-bootstrap'
import { Switch, Link } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { Typography } from '@mui/material'

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleaboutClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="navbar">
      <div className="left-box">
        <ul>
          <li>
          <Typography variant="body1"> 
            <Link to="/home">
              EZInsure
            </Link>
            </Typography>
            </li>

          <li>
            <a href="#">
            </a>
            <Button
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {' '}
              ABOUT US{' '}
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{ 'aria-labelledby': 'fade-button' }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleaboutClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleaboutClose}>Mission</MenuItem>
              <MenuItem onClick={handleaboutClose}>Vision</MenuItem>
              <MenuItem onClick={handleaboutClose}>Work Culture</MenuItem>
            </Menu>
          </li>
          <li>
          <Typography variant="body1"> 
            <Link to="/home">
              Services
            </Link>
            </Typography>
            </li>
            <li>
          <Typography variant="body1"> 
            <Link to="/Contactus">
              Contact
            </Link>
            </Typography>
            </li>
        </ul>
      </div>
      <div className="login_box">
        <ol className="order">
          <li>
            <Link to="/login">
             <Button variant="inherit">Login</Button>
            </Link>
          </li>

          <li>
            <Link to="/signup"><Button variant="outlined">SignUp</Button></Link>
          </li>
        </ol>
      </div>
    </div>
  )
}
