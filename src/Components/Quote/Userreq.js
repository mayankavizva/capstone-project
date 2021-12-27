import { textAlign } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";

export default function Userreq(){

    const history=useHistory()

    const email=history.location.state

    const handleClick1=()=>{
        history.push("/Sheet" , email)
    }

    const handleClick2=()=>{
       history.push("/Claim")
    }

    const handleClick3=()=>{
        history.push("/Home")
     }

    return(
        <>
        <div className="container" style={{backgroundColor:"silver" ,width:"800px", height:"650px" ,textAlign:"center" , paddingTop:"30px" , paddingBottom:"20px"}}>
        <button type="button" class="btn btn-dark" style={{ textAlign:"center", width:"100px" , height:"50px" , marginLeft:"600px"}} onClick={handleClick3}>LOGOUT</button>
       <h1 style={{padding:"50px"}}>Welcome  {email}!</h1>
      <br/>
      
  
    <div className="col">
    <button type="button" class="btn btn-danger" style={{width:"400px" , height:"100px"}} onClick={handleClick1}>Premium Sheet</button>
    </div>
    <br/>
    <br/>
    <br/>
    
    <div className="col">
    <button type="button" class="btn btn-success" style={{width:"400px" , height:"100px"}} onClick={handleClick2}>Claim</button>
    </div>
   
  

</div>
        </>
    )

}

