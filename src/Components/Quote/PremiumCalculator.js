import React from "react";
import { useState ,useEffect} from "react";
import { useHistory } from "react-router";


function PremiumCalculator(props){


    let history=useHistory()
    console.log(history);
    let history1=useHistory()

    const handleClick=()=>{
        history1.push("/signup")
    }

    return(
        <>
        <div style={{ margin:0 , padding:0 , height:"100%"}}>
       <div className="card" style={{backgroundColor:"thistle" , width: "45rem" , height:"33rem" , margin:"100px" , marginLeft:"300px" , textAlign:"center"}}>
  <div className="card-body">
    <h1 className="card-title">Total Premium</h1>
    <br/>
    <br/>
    <h3 className="card-text">Premium Amount for Your Given Detail of Vehicles:</h3>
    <br/>
    <h3 className="card-text">For Month :- </h3>
    <h3 className="card-text">Amount :- {history.location.state}</h3>
    <br/>
    <h3 className="card-text">For Year :- </h3>
    <h3 className="card-text">Amount :- {history.location.state*11}  </h3>
    <h3 className="card-text">Discount Amount :-  {history.location.state} </h3>
    <br/>

    <a href="#" className="btn btn-danger" onClick={handleClick}>Buy Now</a>
  </div>
</div>
</div>
       
        </>
    )
}

export default PremiumCalculator