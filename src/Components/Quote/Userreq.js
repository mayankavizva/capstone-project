import { textAlign } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";

export default function Userreq(){

    const history=useHistory()

    const handleClick1=()=>{
        history.push("/Sheet")
    }

    const handleClick2=()=>{
       history.push("/Claim")
    }
    return(
        <>
        <div className="container" style={{backgroundColor:"silver" ,width:"800px", height:"600px" ,textAlign:"center" , paddingTop:"30px" , paddingBottom:"20px"}}>
       <h1 style={{padding:"50px"}}>Welcome  User!</h1>
      <br/>
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

