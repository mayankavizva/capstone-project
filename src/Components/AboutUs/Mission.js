import React from 'react'
import './aboutus.css'
import mimg from './missionlogo.png'

export const Mission = () => {
    return (
        <>
        <div className="missionblock">
            <div className="mleft">
            <h1>Mission</h1>
            <p>To help our customers achieve financial prosperity and peace of mind.</p> 
            <h1>Core Values</h1>
            <p>How we conduct our business is just as important as what we do. Our core values are the principles that guide us daily in helping our customers achieve financial prosperity and peace of mind. At all times, we strive to distinguish EasyInsurance as an admired multinational financial services leader and trusted brand that is differentiated by top talent and innovative solutions for all stages of life.</p>
            <ul className="list">
                <li>Worthy of Trust: We keep our promises and are committed to doing business the right way.</li>
                <li>Customer Focused: We provide quality products and services that meet our customers' needs.</li>
                <li>Respect for Each Other: We are inclusive and collaborative, and individuals with diverse backgrounds and talents can contribute and grow.</li>
                <li>Winning with Integrity: We are passionate about becoming the unrivaled industry leader by achieving superior results for our customers, shareholders, and communities.</li>
            </ul>
            </div>
            <div className="mright">
            <img src={mimg}></img>
            </div>
        </div>
        </>
    )
}
