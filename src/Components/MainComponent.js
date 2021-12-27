import React from 'react'
import '../App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import '../Components/MainComponent.css'
import HomeComponent from '../Components/HomeComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUs from './ContactUs'
import GetAQuote from './Quote/GetAQuote'

import LoginPage from './LoginRegistrationPage/LoginPage'
import RegistrationPage from './LoginRegistrationPage/RegistrationPage'
import NatureInsurance from './Quote/NatureInsurance'
import Business from './Quote/Business'
import IndividualVehicleDetails from './Quote/IndividualVehicleDetails'
import BusinessVehicleDetails from './Quote/BusinessVehicleDetails'
import PremiumCalculator from './Quote/PremiumCalculator'
import ServicePage from '../ServicePage/ServicePage'
import Userreq from './Quote/Userreq'
import Claim from './Claim/Claim'
import Forgot from './LoginRegistrationPage/Forgot'
import Adminreq from './LoginRegistrationPage/Adminreq'
import Sheet from './Quote/Sheet'
import Summary from './LoginRegistrationPage/Summary'
import Exposure from './LoginRegistrationPage/Exposure'
import Admin from './LoginRegistrationPage/Admin'
import Mission from './AboutUs/Mission'
import Vision from './AboutUs/Vision'
import Workculture from './AboutUs/Workculture'


function Component() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/ServicePage" component={ServicePage} />
      </Switch>

      <Switch>
        <Route exact path="/contactus" component={ContactUs} />
      </Switch>
      <Switch>
        <Route exact path={['/home', '/']} component={HomeComponent} />
      </Switch>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Switch>
        <Route exact path="/signup" component={RegistrationPage} />
      </Switch>
      <Switch>
        <Route exact path="/getaquote" component={GetAQuote} />
      </Switch>
      <Switch>
        <Route exact path="/NatureInsurance" component={NatureInsurance} />
      </Switch>

      <Switch>
        <Route exact path="/Business" component={Business} />
      </Switch>
      <Switch>
        <Route exact path="/BusinessVehicleDetails" component={BusinessVehicleDetails} />
      </Switch>
      <Switch>
        <Route exact path="/IndividualVehicleDetails" component={IndividualVehicleDetails} />
      </Switch>
      <Switch>
        <Route exact path="/PremiumCalculator" component={PremiumCalculator} />
      </Switch>
      <Switch>
        <Route exact path="/Userreq" component={Userreq} />
      </Switch>
      <Switch>
        <Route exact path="/Adminreq" component={Adminreq} />
      </Switch>
      <Switch>
        <Route exact path="/Claim" component={Claim} />
      </Switch>
      <Switch>
        <Route exact path="/Sheet" component={Sheet} />
      </Switch>
      <Switch>
        <Route exact path="/Summary" component={Summary} />
      </Switch>
      <Switch>
        <Route exact path="/Exposure" component={Exposure} />
      </Switch>
      <Switch>
        <Route exact path="/Forgot" component={Forgot} />
      </Switch>
      <Switch>
        <Route exact path="/Admin" component={Admin} />
      </Switch>
      <Switch>
        <Route exact path="/Mission" component={Mission} />
      </Switch>
      <Switch>
        <Route exact path="/Vision" component={Vision} />
      </Switch>
      <Switch>
        <Route exact path="/Workculture" component={Workculture} />
      </Switch>
      
     
      
      <Footer/>
    </Router>
  )
}

export default Component
