import React from 'react';
import capstone from '../Components/images/capstone.jpeg';
import ImgMediaCard from './Cards/Cards';
import { useHistory } from 'react-router-dom';
import "../Components/HomeComponent.css";

const HomeComponent = () => {
    let history = useHistory();
    return (
        <div>
        <div className="inner_content">
            <div className="image">
                <img src={capstone} alt="Loading Image..." />
            </div>
            <h1>Business Insurance</h1>
            <h2 className="fw-bold">Radically Simple</h2>
            <br />
            <div className="list">
                <ul>
                    <li>Get Insured in 30 minutes</li>
                    <li>Lowest Prices</li>
                    <li>Customized Policies</li>
                    <li>Talk to an Expert</li>
                </ul>
                
                <button id="quote" onClick={() => {
                    history.push('/getaquote');
                }}>Get A Quote</button>

            </div>
            <br />
            <br />
            <br />
            <br />
            <h3>
                <strong> Industry-Specific Coverage</strong>
            </h3>
            <ImgMediaCard />
            <br />
            <br />
            <br /><br />
        </div>
    </div>
    )
}

export default HomeComponent;

