import React from "react";
import { useState ,useEffect} from "react";
import { useHistory } from "react-router";


function PremiumCalculator(props){
 
  
  

    let history=useHistory()
    console.log("this is history data"+history);
    
    const email=history.location.state.gmail;
    const insurance=history.location.state.first;
    const vehicle=history.location.state.total_vehicle;
    const premium=history.location.state.prem
    const amount=history.location.state.amount;
     const type="Automobiles"

    

    const handleClick=()=>{
      var today=new Date()
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const data={email , insurance , vehicle , type, date , premium}
      console.log("this is the data "+data)
      fetch("http://localhost:8083/premium/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
  }).then((result)=>result.json())


const data1={email , insurance , vehicle , type, date , amount}
console.log("this is the data "+data1)
      fetch("http://localhost:8083/Exposure/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data1)
  }).then((result)=>result.json())
        history.push("/signup")
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
    <h3 className="card-text">Amount :- {history.location.state.prem}</h3>
    <br/>
    <h3 className="card-text">For Year :- </h3>
    <h3 className="card-text">Amount :- {history.location.state.prem*11}  </h3>
    <h3 className="card-text">Discount Amount :-  {history.location.state.prem} </h3>
    <br/>

    <a href="#" className="btn btn-danger" onClick={handleClick}>Buy Now</a>
  </div>
</div>
</div>
       
        </>
    )
}

export default PremiumCalculator