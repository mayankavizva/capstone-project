// import React, { Component, useState } from "react";
// import './getaquote.css'
// import { useHistory } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { Container ,Paper,Button} from '@material-ui/core';
// // import NatureInsurance from './NatureInsurance'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
       
//       },
//     },
//   }));


// function GetAQuote (){
//     const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
//     const[username,setName]=useState('')
//     const[mobile,setMobile]=useState('')
//     const[aadhar,setAadhar]=useState('')
//     const[email,setEmail]=useState('')
    
//      const classes = useStyles();

//      let history=useHistory()

//   const handleClick=(e)=>{
//     if(username!='' && mobile!='' && aadhar!='' && email!=''){
     
    
//     history.push("/NatureInsurance")
//     e.preventDefault()
//     const user={username , aadhar , mobile , email}
//     console.log(user)
//     fetch("http://localhost:8083/getaquote/add",{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(user)

//   }).then(()=>{
//     console.log("New User added")
//   })
// }
//   else{
//     alert("please fill the complete form")
//   }
// }

// // useEffect(()=>{
// //   fetch("http://localhost:8080/student/getAll")
// //   .then(res=>res.json())
// //   .then((result)=>{
// //     setStudents(result);
// //   }
// // )
// // },[])
//   return (

//     <Container>
//         <Paper elevation={3} style={paperStyle}>
//             <h1 style={{color:"Black" , textAlign:"Center"}}>Contact Information</h1>

//     <form className={classes.root} noValidate autoComplete="off">
    
//       <TextField  id="outlined-basic" label="Name"  fullWidth 
//       value={username}
//       onChange={(e)=>setName(e.target.value)} required
//       />
//       <TextField id="outlined-basic" label="Mobile" fullWidth
//       value={mobile}
//       onChange={(e)=>setMobile(e.target.value)} required
//       />
//       <TextField id="outlined-basic" label="Aadhar Number" fullWidth
//       value={aadhar}
//       onChange={(e)=>setAadhar(e.target.value)} required
//       />
//       <TextField id="outlined-basic" label="Email Id" fullWidth
//       value={email}
//       onChange={(e)=>setEmail(e.target.value)} required
//       />
//       <Button variant="contained" color="secondary" onClick={handleClick}>
//   Next
// </Button>
//     </form>
   
//     </Paper>

//     </Container>
//   );
// }

// export default GetAQuote;