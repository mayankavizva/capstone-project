import React, { Component, useState } from "react";
import './getaquote.css'
import { useHistory } from "react-router-dom";
// import { makeStyles } from '@mui/core/styles';
// import TextField from '@mui/core/TextField';
import {Button} from '@mui/material';


export default function NatureInsurance (){

const [first,last]=useState("")
    let history=useHistory()

    function clickHandlers(e){
        if(first==="individual"){
          history.push("/IndividualVehicleDetails")

        }
        else{
            history.push("/Business")
        }
        e.preventDefault()
        const insurance={first}
        console.log(insurance)
        fetch("http://localhost:8083/NatureInsurance/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(insurance)
    
      }).then(()=>{
        console.log("Insurance Type is added")
      })
    }
  return (


<div className="container" style={{height:"300px"}}>
<form className="form">
<h1 style={{color:"Black" , textAlign:"Center"}}>Nature Of Insurance</h1>
    <br/>
    <br/>
    <select onChange={(e)=>{last(e.target.value)}}>
        <option disabled hidden selected>Type Of Insurance</option>
        <option value="individual">Individual</option>
        <option value="business">Business</option>
    </select>
    <br/>
    <Button variant="contained" color="secondary" onClick={clickHandlers}>Submit</Button>
 
</form>
</div>
  );
}
