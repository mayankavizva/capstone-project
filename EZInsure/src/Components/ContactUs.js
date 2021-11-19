import React from "react";
import { Grid, Box, Typography, TextField , TextareaAutosize, Card,CardContent, Button} from "@mui/material";

const ContactUs = () => {
  return (
    <Box m={3} p={3}>
      <Typography variant="overline" fontSize="40px" fontWeight="220">
        Contact us
      </Typography>
      <hr style={{ opacity: "0.4" }} />
      <Box m={3} p={3}>
        <Grid container spacing={10} className="contactForm">
          <Grid item xs={12} sm={5} >
            <TextField
              name="name"
              label="Enter Your Name"
              required
              fullWidth
              id="name"
              style={{margin:'10px 0px'}}
            />
            <br/>
             
            <TextField
              name="name"
              label="Enter a valid Email address"
              required
              fullWidth
              id="email"
              style={{margin:'10px 0px'}}
            />
          
          <br/>
          <Grid item xs={12} sm={5} style={{margin:'10px 0px'}}>
            <TextareaAutosize 
              aria-label="minimum height"
              minRows={10}
              cols={15}
              fullWidth
              placeholder="Enter your message"
              style={{ width: 200 }}
            />
          </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
                <Card style={{height:350, width:550, backgroundColor:'#F0D9FF'}} >
                    <CardContent style={{textAlign:"center"}}>
                    <Typography variant="overline" fontSize="25px" >
                        Call us
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        +91 73473-79293
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        +91 88724-00249
                    </Typography>
                    <Typography variant="overline"fontSize="25px">
                        Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                       Central Town, Hoshiarpur, Punjab,146001 
                    </Typography>

                    <Typography variant="overline"fontSize="25px">
                        Business Hours
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                       Mon-Fri: 10:00 AM - 8:00 PM <br/>
                           Sat-Sun: Closed
                    
                       
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                
         
          
        </Grid>
        <Button variant="contained" style={{backgroundColor:"#F0D9FF"}}>
                    Submit
                </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;

