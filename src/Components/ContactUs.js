import React, { useState } from 'react'
import {
  Grid,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Card,
  CardContent,
  Button,
} from '@mui/material'
import { useHistory } from "react-router-dom";

const ContactUs = () => {
  

  const[name , setname]=useState("");
  const[email , setemail]=useState("");
  const[message , setmessage]=useState("");

  const history=useHistory();

  const ClickHandler=(e)=>{
    history.push("/Home")
    e.preventDefault();
    const cont={name , email , message}
    fetch("http://localhost:8083/Contact/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(cont)
     }).then((result)=>result.json())
     .then((data)=>{
         console.log(data)
     })
  }

  return (
    <Box m={3} p={3}>
      <div className="contactHeader"> 
      <Typography variant="overline" fontSize="40px" fontWeight="220">
        Contact us
      </Typography>
      </div>
      <hr style={{ opacity: '0.4' }} />
      <Box m={3} p={3}>
        <Grid container spacing={10} className="contactForm">
          <Grid item xs={12} sm={5}>
            <TextField
              name="name"
              label="Enter Your Name"
              required
              fullWidth
              id="name"
              variant="standard"
              style={{ margin: '10px 0px' , width:"400px" }}
              value={name}
              onChange={(e)=>setname(e.target.value)} required
            />
            <br />

            <TextField
              name="name"
              label="Enter a valid Email address"
              required
              fullWidth
              variant="standard"
              id="email"
              style={{ margin: '10px 0px'  , width:"400px"}}
              value={email}
              onChange={(e)=>setemail(e.target.value)} required
            />

            <br />
            <Grid item xs={12} sm={5} style={{ margin: '10px 0px' }}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={10}
                fullWidth
                variant="standard"
                placeholder="Enter your message"
                style={{
                  width: 400,
                  padding: '8px',
                  fontFamily: `"Roboto","Helvetica","Arial",sans-serif;`,
                }}
                className={`textArea`}
                value={message}
              onChange={(e)=>setmessage(e.target.value)} required
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card
              style={{ height: 350, width: 550, backgroundColor: '#FCD2D1' }}
            >
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="overline" fontSize="25px">
                  Call us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +91 73473-79293
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +91 88724-00249
                </Typography>
                <Typography variant="overline" fontSize="25px">
                  Location
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Central Town, Hoshiarpur, Punjab,146001
                </Typography>

                <Typography variant="overline" fontSize="25px">
                  Business Hours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mon-Fri: 10:00 AM - 8:00 PM <br />
                  Sat-Sun: Closed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button variant="contained" style={{ backgroundColor: '#FF5C58' }} onClick={ClickHandler}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default ContactUs
