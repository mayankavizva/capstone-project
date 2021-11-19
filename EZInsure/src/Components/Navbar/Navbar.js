import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { FaHome, FaUser, FaAddressBook, FaHandshake } from "react-icons/fa";
import RegistrationPage from "../LoginRegistrationPage/RegistrationPage";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import LoginPage from "../LoginRegistrationPage/LoginPage";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import { Switch, Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";

export default function Navbar() {
  const [popup, setpopup] = useState(false);
  const handleOpen = () => {
    setpopup(true);
  };
  const handleClose = () => {
    setpopup(false);
  };
  const [login, setlogin] = useState(false);
  const handleLogin = () => {
    setlogin(true);
  };
  const handleLoginClose = () => {
    setlogin(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleaboutClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="content">
      <div className="navbar">
        <Switch>
          <span>
            <nav>
              <div className="login_box">
                {/* <input type="text" placeholder="Search anything..."/> */}
                <Button
                  variant="contained"
                 color="inherit"
                  onClick={handleLogin}
                >
                  LOGIN
                </Button>
                <Dialog open={login} onClose={handleLoginClose}>
                  <LoginPage handleLoginClose={handleLoginClose} />
                </Dialog>
                <Button
                  variant="contained"
                    color="inherit"
                  onClick={handleOpen}
                >
                  Signup
                </Button>
                <Dialog open={popup} onClose={handleClose}>
                  <RegistrationPage handleClose={handleClose} />
                </Dialog>
              </div>
              <ul>
                <Link to="/home">
                  <li>
                    <a href="#">
                      <Typography variant="h5">EZInsure</Typography>
                    </a>
                  </li>
                </Link>
                <li>
                  <a href="#">
                    <FaUser />
                  </a>
                  <Button
                    id="fade-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    ABOUT US
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
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
                  <a href="#">
                    <FaHandshake />
                    {` SERVICES`}
                  </a>
                </li>
                <Link to="/contactus">
                  <li>
                    <a href="#">
                      <FaAddressBook />
                      {` CONTACT`}
                    </a>
                  </li>
                </Link>
              </ul>
            </nav>
          </span>
        </Switch>
      </div>
    </div>
  );
}
