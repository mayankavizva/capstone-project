import React, { Component, useState } from "react";
import './getaquote.css'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { Container ,Paper,Button} from '@mui/material';
import PremiumCalculator from "./PremiumCalculator";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));


function IndividualVehicleDetails (){
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[registration,setRegistration]=useState('')
    const[purchaseA,setPurchaseA]=useState('')
    const[capacity,setCapacity]=useState('')
    const[purchaseD,setPurchaseD]=useState('')
    const[state,setState]=useState('')
    const [calcpremium , setcalcpremium]=useState()
    const premium=0;
    
    const [vehicle,setVehicle]=useState("")
    const [fuel,setFuel]=useState("")
    
     const classes = useStyles();

     let history=useHistory()
     


  const handleClick=(e)=>{
   
    e.preventDefault()
    const indveh={state ,vehicle , fuel , registration , purchaseA , capacity , purchaseD , premium}
    console.log(indveh)
    fetch("http://localhost:8083/IndividualVehicleDetails/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(indveh)
  }).then((result)=>result.json())
  .then((data)=>{
    console.log(data.premium)
   
    history.push("/PremiumCalculator",data.premium)
  })
 
}

// useEffect(()=>{
//   fetch("http://localhost:8080/student/getAll")
//   .then(res=>res.json())
//   .then((result)=>{
//     setStudents(result);
//   }
// )
// },[])
  return (

    <Container style={{marginBottom:"100px",marginTop:"100px"}}>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"Black" , textAlign:"Center"}}>Vehicle Details</h1>
            <br/>

    <form className={classes.root} noValidate autoComplete="off">

   
    <select style={{width:"100%",
    padding:"8px",
    padding : "0px 5px",
    height:"40px",
    border:"none",
    textSizeAdjust:"20px",
    background: "none",
    borderBottom:"1px solid black"
    }} 
    className="Area" onChange={(e)=>{setState(e.target.value)}}>

        <option disabled hidden selected>Area Type*</option>
        <option value="Rural">Rural</option>
        <option value="Urban">Urban</option>
    </select>

    <select style={{width:"100%",
    padding:"8px",
    padding : "0px 5px",
    height:"40px",
    border:"none",
    textSizeAdjust:"20px",
    background: "none",
    borderBottom:"1px solid black"
    }} 
    className="Vehicle Type" onChange={(e)=>{setVehicle(e.target.value)}}>

        <option disabled hidden selected>Vehicle Type*</option>
        <option value="Two Wheeler">Two Wheeler</option>
        <option value="Three Wheeler">Three Wheeler</option>
        <option value="Four Wheeler">Four Wheeler</option>
        <option value="Eight Wheeler">Eight Wheeler</option>
    </select>
    <select style={{width:"100%",
    padding:"8px",
    padding : "0px 5px",
    height:"40px",
    border:"none",
    textSizeAdjust:"20px",
    background: "none",
    borderBottom:"1px solid black"
    }}
     className="Fuel Type" onChange={(e)=>{setFuel(e.target.value)}}>
        <option disabled hidden selected>Fuel Type*</option>
        <option value="DIESEL">DIESEL</option>
        <option value="PETROL">PETROL</option>
        <option value="CNG">CNG</option>
    </select>
    
      <TextField  id="outlined-basic" label="Registration Number"  fullWidth 
      value={registration}
      onChange={(e)=>setRegistration(e.target.value)} required
      />
      <TextField  id="outlined-basic" label="Vehicle Purchase Amount"  fullWidth 
      value={purchaseA}
      onChange={(e)=>setPurchaseA(e.target.value)} required
      />
      <TextField  id="outlined-basic" label="Engine Capacity"  fullWidth 
      value={capacity}
      onChange={(e)=>setCapacity(e.target.value)} required
      />
      <TextField  id="outlined-basic" label="Vehicle Years"  fullWidth 
      value={purchaseD}
      onChange={(e)=>setPurchaseD(e.target.value)} required
      />
   
    <br/>
      
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>

   
   
    </Paper>



    </Container>
  );
}

export default IndividualVehicleDetails;