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

const LoginPage = ({setIsLogin,userDetails}) => {
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
    if(loginData.email===userDetails.email && loginData.password===userDetails.password){
      console.log(true);
      setIsLogin(true);
      history.push('/');
    }
  };
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
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
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 5 }}
            >
              <TextField
                margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email"
                autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password"
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
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/registration" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

    )
}
export default LoginPage;
