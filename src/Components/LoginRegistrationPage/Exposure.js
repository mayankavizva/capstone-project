import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function Exposure(){

    const[summary , setSummary]=useState([])
    const[total , setTotal]=useState(0)

    const history=useHistory();
   
    useEffect(()=>{
    fetch("http://localhost:8083/Exposure/get")
      .then((result)=>result.json())
      .then((data)=>{
      setSummary(data)
          console.log(data)
var total1=data.reduce((prev ,curr)=>
      prev+curr.amount,0
      )
      setTotal(total1)
      })
},[])
    
    const handleClick3=()=>{
        history.push("/Home")
    }
  
    
    
    return(
        <>
        <div className="d-flex flex-row-reverse bd-highlight" style={{marginTop:"50px"}}>
        <div className="col">
        <button type="button" class="btn btn-danger" style={{ textAlign:"center", width:"100px" , height:"50px" , marginLeft:"500px" }} onClick={()=>{history.push("/Adminreq")}}>BACK</button>
         </div>
         <div className="col">
         <button type="button" class="btn btn-danger" style={{ textAlign:"center", width:"100px" , height:"50px" , marginLeft:"100px" }} onClick={handleClick3}>LOGOUT</button>
         </div>
         </div>
        <div className="container" style={{backgroundColor:"silver" ,width:"1600px", height:"650px" ,textAlign:"center" , paddingTop:"30px" , paddingBottom:"20px" , marginTop:"50px"}}>
        <h1 style={{textAlign:"center"}}>Exposure Summary</h1>
        
        <br/>
        <br/>

       
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Nature of Insurance</th>
      <th scope="col">Total Vehicle</th>
      <th scope="col">Type Of Insurance</th>
      
      <th scope="col">Premium Purchase Date</th>
      <th scope="col">Exposure Amount</th>
      
    </tr>
  </thead>

  <tbody>
    {summary.map(summar=>(
    
      <tr>
      <th scope="row">{summar.id}</th>
      <td>{summar.email}</td>
      <td>{summar.insurance}</td>
      <td>{summar.vehicle}</td>
      <td>{summar.type}</td>
      <td>{summar.date}</td>
      
      <td>{summar.amount} Rs</td>

    </tr>
    ))
    
}
</tbody>
</table>
        
<h2>Total Exposure Amount:{total}</h2>
        </div>
        
        </>
    )
}