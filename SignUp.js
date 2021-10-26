import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


const theme = createTheme();

const initialState = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
  password: "",
  cnfPassword: "",
};

const beforeSubmitCheck = (dataObj) => {
  // console.log(Object.values(dataObj).every((field) => field === ""));

  return Object.values(dataObj).every((field) => field === "");
};

const SignUp = () => {
  // State Values for Input & Error
  const [inputData, setInputData] = useState(initialState);
  const [errorData, setErrorData] = useState(initialState);
  const [showPassword, setShowPassword] = useState("password");

  const validateForm = (name, value) => {
    let errObj = errorData;

    //regex Expression dictionary
    const regEx = {
      alphabets: /^[A-Za-z]+$/,
      email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      alphaNumeric: /^[a-zA-Z0-9!@#$%^&*_]*$/,
    };
    switch (name) {
      case "firstName": {
        if (value === "") {
          errObj[name] = "Field required!!!";
        } else if (!value.match(regEx["alphabets"])) {
          errObj[name] = "Only alphabets!!";
        } else if (value.length < 3) {
          errObj[name] = "Name should be atleast 3 letters!!";
        } else {
          errObj[name] = "";
        }
        break;
      }
      case "lastName": {
        if (value === "") {
          errObj[name] = "Field required!!!";
        } else if (!value.match(regEx["alphabets"])) {
          errObj[name] = "Enter name correctly!!!";
        } else {
          errObj[name] = "";
        }
        break;
      }
      case "number": {
        if (value === "") {
          errObj[name] = "Field required!!!";
        } else if (isNaN(value)) {
          errObj[name] = "Only numeric digits allowed!";
        } else if (value.length !== 10) {
          errObj[name] = "Phone number should be 10 digits! ";
        } else {
          errObj[name] = "";
        }
        break;
      }
      case "email": {
        if (value === "") {
          errObj[name] = "Field required!!!";
        } else if (!value.match(regEx["email"])) {
          errObj[name] = "Enter email correctly(you@example.com)!!!";
        } else {
          errObj[name] = "";
        }
        break;
      }
      case "password": {
        if (value === "") {
          errObj[name] = "Field required!!!";
        } else if (!value.match(regEx["aplphaNumeric"])) {
          errObj[name] =
            "Password must contain alphabets,numbers & special characters!!!";
        } else if (value.length < 5) {
          errObj[name] = "Password should be greater than 5 letters";
        } else {
          errObj[name] = "";
        }
        break;
      }
      case "cnfPassword": {
        console.log(value, errorData.password);
        if (value === "") {
          errObj[name] = "Field required!!!";
        } else if (value !== inputData.password) {
          errObj[name] = "unmatched";
        } else {
          errObj[name] = "";
        }
        break;
      }
      default:
    }
    setErrorData(errObj);
  };

  // HandleSubmit Function
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataObj = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      number: data.get("number"),
      email: data.get("email"),
      password: data.get("password"),
    };

    if (beforeSubmitCheck(dataObj)) {
      setErrorData(
        { firstName: "It should not be empty" },
        { lastName: "It should not be empty" },
        { number: "It should not be empty" },
        { email: "It should not be empty" }
      );
    } else {
      console.log(dataObj, "line139");
      localStorage.setItem("userDetail",JSON.stringify(dataObj));
    }
  };

  //HandleChange Function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    validateForm(name, value);
  };

  //Show Password Function
  const handleClickShowPassword = () => {
    setShowPassword(showPassword === "password" ? "text" : "password");
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
            {/* {/ <LockOutlinedIcon /> /} */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  defaultValue={inputData.firstName}
                  onChange={handleChange}
                  InputProps={{}}
                  helperText={errorData.firstName}
                  error={errorData.firstName !== ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  defaultValue={inputData.lastName}
                  onChange={handleChange}
                  helperText={errorData.lastName}
                  error={errorData.lastName !== ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="number"
                  autoComplete="number"
                  defaultValue={inputData.number}
                  onChange={handleChange}
                  helperText={errorData.number}
                  error={errorData.number !== ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue={inputData.email}
                  onChange={handleChange}
                  error={errorData.email !== ""}
                  helperText={errorData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword}
                  id="password"
                  autoComplete="new-password"
                  defaultValue={inputData.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword === "text" ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={errorData.password}
                  error={errorData.password !== ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cnfPassword"
                  label="Confirm Password"
                  type="password"
                  id="cnfPassword"
                  autoComplete="new-password"
                  defaultValue={inputData.cnfPassword}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {inputData.password === inputData.cnfPassword ? (
                            <CheckCircleOutlineIcon />
                          ) : null}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={errorData.cnfPassword}
                  error={errorData.cnfPassword !== ""}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#00ADB5" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
