import React,{useEffect, useState} from "react";
import { useHistory } from "react-router";

export default function Sheet(){


    
    const history=useHistory();

    console.log(history)
    const[sheet , setSheet]=useState([])
    const loginData = { 
        email: history.location.state
      };
      
   useEffect(()=>{
      fetch("http://localhost:8083/premium/email",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(loginData)
      }).then((result)=>result.json())
      .then((data)=>{
          setSheet(data)
          console.log(data)
         
   })},[])
    //   console.log("this is state"+sheet)

    const handleClick3=()=>{
        history.push("/Home")
    }
    return(
        <>
        
        <button type="button" class="btn btn-danger" style={{ textAlign:"center", width:"100px" , height:"50px" , marginLeft:"1200px" , marginTop:"50px"}} onClick={handleClick3}>LOGOUT</button>
        <div className="container" style={{backgroundColor:"silver" ,width:"800px", height:"750px" ,textAlign:"center" , paddingTop:"30px" , paddingBottom:"20px" , marginTop:"50px"}}>
        <h1 style={{textAlign:"center"}}>Premium Sheet</h1>
        
        <br/>
        <br/>
        <div style={{textAlign:"left" , paddingLeft:"40px"}}>
            
        
  <div class="row">
    <div class="col" >
     <h2>Id:</h2>
    </div>
    <div class="col">
    <h2>{sheet.id}</h2>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
     <h2>Email:</h2>
    </div>
    <div class="col">
    <h2>{sheet.email}</h2>
    </div>
  </div>
            <br/>
            <div class="row">
    <div class="col">
     <h2>Nature Of Insurance :</h2>
    </div>
    <div class="col">
    <h2>{sheet.insurance}</h2>
    </div>
  </div>
            <br/>
            <div class="row">
    <div class="col">
     <h2>Insurance Type:</h2>
    </div>
    <div class="col">
    <h2>{sheet.type}</h2>
    </div>
  </div>
            
            <br/>
            <div class="row">
    <div class="col">
     <h2>Total Number Of Vehicles :</h2>
    </div>
    <div class="col">
    <h2>{sheet.vehicle}</h2>
    </div>
  </div>
            
            <br/>
            <div class="row">
    <div class="col">
     <h2>Date Of Premium Purchased : </h2>
    </div>
    <div class="col">
    <h2>{sheet.date}</h2>
    </div>
  </div>
            
            <br/>
            <div class="row">
    <div class="col">
     <h2>Premium Amount :</h2>
    </div>
    <div class="col">
    <h2>{sheet.premium}</h2>
    </div>
  </div>
           
       
            </div>
            
        </div>
        </>
    )
}