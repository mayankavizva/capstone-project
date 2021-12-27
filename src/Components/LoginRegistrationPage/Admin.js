import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./LoginPage.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
// import useSession from "./useSession";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router";

// const LoginPage = ({ /*handleLoginClose*/ }) => {
//     const [UserLogin, setUserLogin] = useState({
//         email: "",
//         password: "",
//     });
//     const handleLoginInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setUserLogin({ ...UserLogin, [name]: value })
//     }
//     const handleLogin = (e) => {
//         e.preventDefault();
//         handleLoginClose();
//     }

const theme = createTheme();

const Admin = ({setIsLogin,userDetails}) => {
  const history=useHistory();
  // const {userDetails,setIsLogin}=useSession();
  const handleSubmit = (event) => {
   
    event.preventDefault();
    // const userDetails = JSON.parse(localStorage.getItem("userDetail")) || {};
    const data = new FormData(event.currentTarget);
    const loginData = { 
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(loginData)
    
  fetch("http://localhost:8083/admin/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(loginData)
  }).then((result)=>result.json())
  .then((data)=>{
    if(data==0){
      alert("Your Credentials is Wrong Please Try again")
      history.push("/Admin")
    }
    else{
      history.push("/Adminreq")
    }
    
  })

  };
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" style={{marginBottom:"100px"}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 5 }}
            >
              <TextField
                margin="normal" required fullWidth id="standard-basic" label="Email Address" name="email" autoComplete="email" variant="standard"
                autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" variant="standard"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#00ADB5" }}
              >
                Sign In
              </Button>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>

    )
}
export default Admin;