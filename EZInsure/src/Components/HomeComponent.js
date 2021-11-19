import React from "react";
import capstone from "../Components/images/capstone.jpeg";
import ImgMediaCard from "./Cards/Cards";
import { useHistory } from "react-router-dom";
import "../Components/HomeComponent.css";
import { Typography } from "@mui/material";

const HomeComponent = () => {
  let history = useHistory();
  return (
    <div className="container">
      <div className="bannerContainer">
        <div className="taglineContainer">
        <Typography variant="h2">Business Insurance</Typography>
      <Typography variant="h5">Radically Simple</Typography>
        </div>
        <div className="imageContainer">
          <img src={capstone} alt="Loading Image..." />
        </div>
      </div>
     

      <div>
        <Typography variant="subtitle1">
          <ul>
            <li> Get Insured in 30 minutes</li>
            <li> Lowest Price</li>
            <li> Customized Policy</li>
            <li> Talk to an Expert</li>
          </ul>
        </Typography>
      </div>

      <div className="list">
        <button
          id="quote"
          onClick={() => {
            history.push("/getaquote");
          }}
        >
          Get A Quote
        </button>
      </div>

      <h3>
        <strong> Industry-Specific Coverage</strong>
      </h3>
      <ImgMediaCard />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeComponent;
