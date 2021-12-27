import React, { Component, useState } from "react";
import './getaquote.css'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));


function Business (){
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[state,setState]=useState('')
    const[pincode,setPincode]=useState('')
    const[vehicle,setVehicle]=useState('')
     const classes = useStyles();

     let history=useHistory()
     console.log(history.location.state)
     const gmail=history.location.state.email
     const first=history.location.state.first

     const data={gmail , first , vehicle}

  const handleClick=(e)=>{
    console.log(data)
    history.push("/BusinessVehicleDetails" , data)
    e.preventDefault()
    const business={name,state, pincode , vehicle}
    console.log(business)
    fetch("http://localhost:8083/Business/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(business)

  }).then(()=>{
    console.log("New Business is added")
  })
}

// useEffect(()=>{
//   fetch("http://localhost:8083/student/getAll")
//   .then(res=>res.json())
//   .then((result)=>{
//     setStudents(result);
//   }
// )
// },[])
  return (

    <Container style={{marginBottom:"100px" , marginTop:"100px"}}>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"Black" , textAlign:"Center"}}>Business Details</h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField  id="outlined-basic" label="Business Name"  fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)} required
      />
      <TextField id="outlined-basic" label="State" fullWidth
      value={state}
      onChange={(e)=>setState(e.target.value)} required
      />
      <TextField id="outlined-basic" label="Pincode" fullWidth
      value={pincode}
      onChange={(e)=>setPincode(e.target.value)} required
      />
      <TextField id="outlined-basic" label="Total Number Of Vehicles" fullWidth
      value={vehicle}
      onChange={(e)=>setVehicle(e.target.value)} required
      />
      <br/>
      <br/>
      <Button variant="contained" color="secondary" onClick={()=>{history.push("/NatureInsurance",gmail)}}>Back</Button>
      <Button variant="contained" color="secondary" style={{marginLeft:"30px"}} onClick={handleClick}>
  Next
</Button>

    </form>
   
    </Paper>

    </Container>
  );
}

export default Business;