import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./GetAQuote.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { shadows } from '@mui/system';
import ProgressMobileStepper from './progressbar';

const GetAQuote = ({ handleNext,handleBack}) => {

    const [flagOne, setFlagOne] = useState(true);
    const [flagTwo, setFlagTwo] = useState(false);
    const [flagThree, setFlagThree] = useState(false);
    const [flagFour, setFlagFour] = useState(false);
    
    const [Quote, setQuote] = useState({
        Fullname: "",
        Address: "",
        BusinessType: "",
        phone: ""
    });
    const handleQuoteInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuote({ ...Quote, [name]: value })
    }
    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        // handleTouchClose();
    }
    const handleNextClick=()=>{
        setFlagOne(false);
        setFlagTwo(true);
        // handleNext();
    }
    const handleNext2Click=()=>{
        setFlagTwo(false);
        setFlagThree(true);
        // handleNext();
    }
    const handleNext3Click=()=>{
        setFlagThree(false);
        setFlagFour(true);
        // handleNext();
    }
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', transform: 'scale(1.0)' }}
        >
        </Box>
    );

    const card = (
        <React.Fragment>
            {flagOne && <CardContent id="content_part1">
                <div className="label_form">
                    <h1>Primary Contact Information</h1>
                    <label for="Fullname" >Fullname</label><br />
                    <input autoFocus margin="dense" autocomplete="off" fullWidth variant="standard" type="Fullname"
                        value={Quote.Fullname} onChange={handleQuoteInput} name="Fullname" id="Fullname" required />
                    <br />
                    <label for="Address">Address Line 1</label><br />
                    <input autoFocus margin="dense" fullWidth variant="standard"
                        type="text" autocomplete="off" value={Quote.Address} onChange={handleQuoteInput}
                        name="Address" id="Address" required />
                    <br />
                    <label for="Address">Address Line 2</label><br />
                    <input autoFocus margin="dense" fullWidth variant="standard"
                        type="text" autocomplete="off" value={Quote.Address} onChange={handleQuoteInput}
                        name="Address" id="Address" required />
                    <br />
                    <label for="State">State</label><br />
                    <input autoFocus margin="dense" fullWidth variant="standard"
                        type="text" autocomplete="off" value={Quote.Address} onChange={handleQuoteInput}
                        name="state" id="state" required />
                    <br />
                    <label for="city">City</label><br />
                    <input autoFocus margin="dense" fullWidth variant="standard"
                        type="text" autocomplete="off" value={Quote.Address} onChange={handleQuoteInput}
                        name="city" id="city" required />
                    <br />
                    <label for="Zipcode">Zipcode</label><br />
                    <input autoFocus margin="dense" fullWidth variant="standard"
                        type="text" autocomplete="off" value={Quote.Address} onChange={handleQuoteInput}
                        name="Zipcode" id="Zipcode" required />
                    <br />
                    <label for="phone">Phone Number: </label><br />
                    <input type="tel" value={Quote.phone}
                        autocomplete="off" onChange={handleQuoteInput} name="phone" id="phone" required />
                    <br />
            <button onClick={handleNextClick}>Next</button>
                </div>
            </CardContent>}
            {flagTwo && <CardContent id="content_part3">
            <h1 id="header2">Business Information </h1>
                <label for="Bop">Type of Insurance:</label><br />
                <select id="browsers">
                    <option>Business Owner's Policy(BOP)</option>
                </select>
                <br />
                <label for="date">When did you start your business :</label><br />
                <input type="date" id="date" name="date" />
                <br />
                <label for="BusinessType">What is the type of your Business?</label>
                <br />
                <select id="businesstype" name="businesstype">
                    <option value="range1">IT Solutions</option>
                    <option value="range2">Software Development</option>
                    <option value="range3">Construction</option>
                    <option value="range4">Medical</option>
                </select>
                <br />
                <label for="">No.of Owners : </label><br />
                <input type="number" />
                <br />
                <label for="Building">Do you own a building?</label><br />
                <input type="radio" value={Quote.business}
                    onChange={handleQuoteInput} name="business" id="business" />
                <label for="Yes" >Yes</label>
                <br />
                <input type="radio" value={Quote.business}
                    onChange={handleQuoteInput} name="business" id="business" />
                <label for="No">No</label>
                <br />

                <label for="age">Age of your building: </label><br />
                <select id="age" name="age">
                    <option value="range1">0 to 3 years</option>
                    <option value="range2">3 to 5 years</option>
                    <option value="range3">5 to 10 years</option>
                    <option value="range4">10 to 15 years</option>
                </select>
                <br />
                <button onClick={handleNext2Click}>Next</button>
            </CardContent>}

            {flagThree && <CardContent id="content_part2"><h3>Assets </h3>
                <h4>Computers</h4>
                <label for="item_types">No. Of Computers :  </label>
                <input type="number" />
                <br />
                <br />
                <label for="item_types">Make Of Computer :  </label>
                <br />
                <select id="make" name="make">
                    <option value="make1">Apple</option>
                    <option value="make2">HP</option>
                    <option value="make3">Asus</option>
                    <option value="make4">Lenovo</option>
                    <option value="make4">Samsung</option>
                    <option value="make4">Dell</option>
                </select>
                <br />
                <label for="item_model">Model Of Computer :  </label>
                <br />
                <select id="model" name="model">
                    <option value="model1"></option>
                </select>
                <br />
                <label for="item_age">Age Of Computers :  </label>
                <select id="age" name="age">
                    <option value="agerange1">0 to 3 years</option>
                    <option value="agerange2">3 to 5 years</option>
                    <option value="agerange3">5 to 10 years</option>
                    <option value="agerange4">10 to 15 years</option>
                </select>
                <br />
                <br />
                <h4>Mobile Phones</h4>
                <label for="item_types">No. Of Mobile Phones :  </label>
                <input type="number" />
                <br />
                <br />
                <label for="item_types">Make Of Mobile Phones :  </label>
                <br />
                <select id="make" name="make">
                    <option value="make1">Apple</option>
                    <option value="make4">Samsung</option>
                    <option value="make3">Asus</option>
                    <option value="make4">One Plus</option>
                    <option value="make2">MI</option>
                    <option value="make4">Motorola</option>
                    <option value="make4">Micromax</option>
                </select>
                <br />
                <label for="item_model">Model Of Computer :  </label>
                <br />
                <select id="make" name="make">
                    <option value="make1"></option>
                </select>
                <br />
                <label for="item_age">Age Of Mobile Phones :  </label>
                <select id="types" name="types">
                    <option value="range1">0 to 3 years</option>
                    <option value="range2">3 to 5 years</option>
                    <option value="range3">5 to 10 years</option>
                    <option value="range4">10 to 15 years</option>
                </select>
                <br />
                <button onClick={handleNext3Click}>Next</button>
            </CardContent>}
            
            {flagFour && <CardContent id="content_part4">
            <h1 id="header4">Insurance Information </h1>
                <label for="date">When would you like your coverage to be started:</label><br />
                <input type="date" id="date" name="date" />
                <br />
                <label for="item_age">Risk Covers   </label><br />
                <select id="types" name="types" >
                    <option value="risk1">Fire</option>
                    <option value="risk2">Theft</option>
                </select>
                <br />
                <button onClick={handleQuoteSubmit}>Submit</button>
            </CardContent>}
        </React.Fragment>
    );
    return (
        <div className="quote_form">
            <Box sx={{ minWidth: 275  }}>
                <Card variant="outlined">{card}</Card>
                <ProgressMobileStepper />
            </Box>
        </div>
    )
}
export default GetAQuote;
