import React from 'react'
import "./aboutus.css" 
import vimg from './vision.jpeg'

 export const Vision = () => {
    return (
        <>
        <div className="visionblock">
            <div className="vleft">
            <h1>Who we are</h1>
            <p>Team of people who risk, learn, and grow together, in the name of progress. We come to work each day looking at everything through the lens of "How can we make this better?" Easyinsure has helped individual and institutional customers grow and protect their wealth. We are known for delivering on our promises to our customers, and are recognized as one of the most admired companies. </p>
            <p>We are one of the leading private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.</p>
            <h1>What we do</h1>
            <p>We provide customers with a variety of products and services, including automobile insurance, life insurance, annuities, retirement-related services, mutual funds and investment management. We strive to create long-term value for our stakeholders through strong business fundamentals, consistent with our mission guided by our vision and directed by our company's core values.</p>
            </div>
            
            <div className="vright">
            <img src={vimg} alt="loading" width="600px" height="600px"></img>
            </div>
            
        </div>
        
       
        
        </>
        
    )
}
