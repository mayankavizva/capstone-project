import React from 'react';
import '../App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import '../Components/MainComponent.css';
import HomeComponent from '../Components/HomeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './ContactUs';
import GetAQuote from './Quote/GetAQuote';
import LoginPage from './LoginRegistrationPage/LoginPage';
import RegistrationPage from './LoginRegistrationPage/RegistrationPage';

function Component() {
    return (

        <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/contactus' component={ContactUs} />
                </Switch>
                <Switch>
                    <Route exact path={["/home", "/"]} component={HomeComponent} />
                </Switch>
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
                <Switch>
                    <Route exact path="/signup" component={RegistrationPage} />
                </Switch>
                <Switch>
                    <Route exact path='/getaquote' component={GetAQuote} />
                </Switch>
                <Footer />
        </Router>

    );
}

export default Component;

