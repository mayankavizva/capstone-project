import React, { useState } from 'react';
import "../Navbar/Navbar.css";
import {
    FaHome, FaUser, FaAddressBook, FaHandshake, FaSignInAlt
} from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleaboutClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navbar">
            <div className="left-box ">
                <ul>
                    <li className="insure">
                    <Link to="/home"><span>{` EZInsure`}</span></Link>
                    </li>
                    <li><FaUser />
                        <Button id="fade-button" aria-controls="fade-menu" aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick} > ABOUT US  </Button>
                        <Menu
                            id="fade-menu" MenuListProps={{ 'aria-labelledby': 'fade-button', }}
                            anchorEl={anchorEl} open={open} onClose={handleaboutClose} TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleaboutClose}>Mission</MenuItem>
                            <MenuItem onClick={handleaboutClose}>Vision</MenuItem>
                            <MenuItem onClick={handleaboutClose}>Work Culture</MenuItem>
                        </Menu>
                    </li>
                    <li><FaHandshake />{` SERVICES`}</li>
                    <li><Link to="/contactus"><FaAddressBook />{` CONTACT`}</Link></li>

                </ul>
            </div>
            <div className="login_box">
                <ol className="order">
                    <li><Link to="/login"><FaSignInAlt />{` LOGIN `}</Link></li>
                    <li><Link to="/signup">{` SIGNUP `}</Link></li>
                </ol>
            </div>
        </div>
    );
}