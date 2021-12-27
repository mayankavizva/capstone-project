import React, { Component, useState } from "react";
import './getaquote.css'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';


export default function NatureInsurance (){

const [first,last]=useState("")
    let history=useHistory()
     
    const email=history.location.state
    const nature={email , first}

    function clickHandler(){
      history.push("/GetAQuote")
    }
    function clickHandlers(e){
        if(first==="individual"){
          history.push("/IndividualVehicleDetails" , nature)

        }
        else{
            history.push("/Business" , nature)
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
    <Button variant="contained" color="secondary" style={{marginRight:"100px"}}onClick={clickHandlers}>Next</Button>
    <Button variant="contained" color="secondary" onClick={clickHandler}>Back</Button>
 
</form>
</div>
  );
}
