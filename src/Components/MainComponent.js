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
import { Mission } from './AboutUs/Mission'
import { Vision } from './AboutUs/Vision'
import { Workculture } from './AboutUs/Workculture'
import { PremiumSummary } from './PremiumSummary'

function Component() {
  return (
    <Router>
      <Navbar />
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
        <Route exact path='/mission' component={Mission} /> 
      </Switch>
      <Switch>
        <Route exact path="/vision" component={Vision} /> 
      </Switch>
      <Switch>
        <Route exact path="/workculture" component={Workculture} /> 
      </Switch>
      <Switch>
        <Route exact path="/premiumsummary" component={PremiumSummary} /> 
      </Switch>
      <Footer />
    </Router>
  )
}

export default Component
