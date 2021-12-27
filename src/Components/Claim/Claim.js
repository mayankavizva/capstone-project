import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));


function Claim(){

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[policy,setpolicy]=useState('')
    const[premium,setpremium]=useState('')
    const[claim,setclaim]=useState('')
    const[destroyed,setdestroyed]=useState('')
    const[name,setName]=useState('')
    const[mobile,setMobile]=useState('')
    const[risk , setrisk]=useState('')
    const[email,setEmail]=useState('')
    const[description,setdescription]=useState('')
    const[place,setplace]=useState('')

    
     const classes = useStyles();

     let history=useHistory()


    

  const handleClick=(e)=>{
    
     
    
    history.push("/Userreq")
    e.preventDefault()
    const premclaim={policy , premium , claim, destroyed, name , mobile , email , risk , place , description}
    console.log(premclaim)
    fetch("http://localhost:8083/Claim/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(premclaim)

  }).then(()=>{
    console.log("Claim details are  added")
  })

 
}


    return(
        <>
        <h1 style={{textAlign:"center" , marginTop:"30px" , marginBottom:"20px"}}>Claim</h1>
        <div className="row g-3">
        <div className="col">
            <Container >
        <Paper elevation={3} style={paperStyle}>
            

    <form className={classes.root} noValidate autoComplete="off">
    
    <TextField  id="outlined-basic" label="Enter Policy Number"  fullWidth 
      value={policy} onChange={(e)=>setpolicy(e.target.value)} required
      />

<TextField  id="outlined-basic" label="Premium Amount"  fullWidth 
      value={premium}
      onChange={(e)=>setpremium(e.target.value)} required
      />
      <TextField id="outlined-basic" label="Claim Amount" fullWidth
      value={claim}
      onChange={(e)=>setclaim(e.target.value)} required
      />
      <TextField id="outlined-basic" label="Destroyed Part" fullWidth
      value={destroyed}
      onChange={(e)=>setdestroyed(e.target.value)} required
      />
      <select style={{width:"100%",
    padding:"8px",
    padding : "0px 5px",
    height:"40px",
    border:"none",
    textSizeAdjust:"20px",
    background: "none",
    borderBottom:"1px solid black"
    }} 
    // className="Area" onChange={(e)=>{setState(e.target.value)}}
    className="Area" onChange={(e)=>{setrisk(e.target.value)}} >

        <option disabled hidden selected>Risk Type*</option>
        <option value="Rural">Fire</option>
        <option value="Urban">Theft</option>
    </select>
     
     <br/><br/>
     
    </form>
   
    </Paper>

    </Container>
</div>
<div className="col">
    <Container >
        <Paper elevation={3} style={paperStyle}>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField  id="outlined-basic" label="Name"  fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)} required
      />
      <TextField id="outlined-basic" label="Mobile" fullWidth
      value={mobile}
      onChange={(e)=>setMobile(e.target.value)} required
      />
      
      <TextField id="outlined-basic" label="Email Id" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)} required
      />

<TextField id="outlined-basic" label="Description About Destroyed Item" fullWidth
      value={description}
      onChange={(e)=>setdescription(e.target.value)} required
      />
    <TextField id="outlined-basic" label="Place Of Accident" fullWidth
      value={place}
      onChange={(e)=>setplace(e.target.value)} required
      />
      <br/><br/>
    
</form>
   
   </Paper>

   </Container >
</div>
   </div>
<br/><br/>
<div className="col" style={{marginLeft:"600px" , marginBottom:"100px" , marginTop:"50px"}}>
   <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck"  required/>
      <label className="form-check-label" for="invalidCheck" >
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
   <h1 style={{ marginLeft:"90px" , width:"100px"}}><Button variant="contained" color="secondary"  onClick={handleClick}>
  Submit
</Button></h1>
</div>
<br/><br/>
        </>
    )

}

export default Claim;