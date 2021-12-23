import React from 'react'
import '../App.css'
import Footer from './Footer/Footer'
import '../Components/MainComponent.css'
import HomeComponent from '../Components/HomeComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUs from './ContactUs'
import GetAQuote from './Quote/GetAQuote'
import LoginPage from './LoginRegistrationPage/LoginPage'
import RegistrationPage from './LoginRegistrationPage/RegistrationPage'
import Navbar22 from './Navbar/Navbar'
// import PremiumSheet from './Quote/PremiumSheet';
import Mission from './AboutUs/Mission';
import Vision from './AboutUs/Vision';
import Workculture from './AboutUs/Workculture';
import AdminLogin from './LoginRegistrationPage/AdminLogin'
import ServicePage from './ServicePage/ServicePage'

function Component() {
  return (
    <Router>
      <Navbar22 />
      <Switch>
        <Route exact path="/contactus" component={ContactUs} />
      </Switch>
      <Switch>
        <Route exact path={['/home', '/']} component={HomeComponent} />
      </Switch>
      {/* <Switch>
        <Route exact path={'/Premiumsheet'} component={PremiumSheet} />
      </Switch> */}
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch> 
      <Switch>
        <Route exact path="/admin" component={AdminLogin} />
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
        <Route exact path="/ServicePage" component={ServicePage} />
      </Switch>
      {/* <Switch>
        <Route exact path="/premiumsummary" component={PremiumSummary} /> 
      </Switch> */}
      <Footer />
    </Router>
  )
}

export default Component
