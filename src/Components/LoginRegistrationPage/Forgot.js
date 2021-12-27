import React, { Component, useState } from "react";
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


function Forgot (){
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    
    const[email,setEmail]=useState('')
    const[password,setpassword]=useState('')
    const[confirmpassword , setconfirmpassword]=useState('')
    
     const classes = useStyles();

     let history=useHistory()

  const handleClick=(e)=>{
     
    if(password==confirmpassword){
    e.preventDefault()
    const user1={email, password}
     console.log(user1)
    fetch("http://localhost:8083/registration/update",{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user1)
     }).then((result)=>result.json())
     .then((data)=>{
         console.log(data)
         if(data==0){
             history.push("/Forgot");
             alert("Incorrect Email ID")
         }
         else{
             alert("Sucessfully Updated")
             history.push("/login");
         }
     })
}
else{
    alert("Mismatch in your Password")
}


  
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

    <Container style={{marginTop:"100px" , marginBottom:"100px"  }}>
       
        <Paper elevation={3} style={paperStyle} >
            <h1 style={{color:"Black" , textAlign:"Center"}}>Forgot Password</h1>

     <br/>
    <form className={classes.root} noValidate autoComplete="off" style={{textAlign:"center" }}>
   
      <TextField id="outlined-basic" label="Email Id" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)} required
      />

      <br/>
      <TextField id="outlined-basic" label="New Password" fullWidth
      value={password}
      onChange={(e)=>setpassword(e.target.value)} required
      />
      <br/>
      <TextField id="outlined-basic" label="Confirm New Password" fullWidth
      value={confirmpassword}
      onChange={(e)=>setconfirmpassword(e.target.value)} required
      />
      <br/>
      <br/>
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>

    </Container>
  );
}

export default Forgot;