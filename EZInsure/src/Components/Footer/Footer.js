import React from 'react';
import "../Footer/Footer.css";
import {
    FaHome,FaTwitter,FaFacebook, FaYoutube, FaLinkedinIn, FaInstagram, FaMailBulk, FaPhone} from "react-icons/fa";
export default function Footer() {
    return (
            <footer className="footer">
            <div className="logo">
                <div className="logo_list">
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a></li>
                        <li><a href="https://twitter.com/?lang=en" target="_blank"><FaTwitter /></a></li>
                        <li><a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <div className="details">
                <p>
                    <strong><FaMailBulk /> Email:</strong>
                    <a href="mailto: ">{` insureyourslef@businessinsurance.com`}</a>
                </p>
                <p><strong><FaPhone />Phone:</strong>{` 98765432`}</p>
                <p><strong><FaHome />Address:</strong>{` 255,Bangalore`}</p>
            </div>
        </footer>
    )
}
