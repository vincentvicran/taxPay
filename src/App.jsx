import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import './app.css';

import Profile from './components/users/pages/Profile';
import AddVehicle from './components/vehicles/pages/AddVehicle';
import Vehicles from './components/vehicles/pages/Vehicles';
import Insurances from './components/insurances/pages/Insurances';
import AddInsurance from './components/insurances/pages/AddInsurance';
import Payments from './components/payments/pages/Payments';
import AddPayment from './components/payments/pages/AddPayment';
import Auth from './components/auth/pages/Auth';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/vehicles">
                    <Vehicles />
                </Route>
                <Route path="/addvehicle">
                    <AddVehicle />
                </Route>
                <Route path="/insurances">
                    <Insurances />
                </Route>
                <Route path="/addinsurance">
                    <AddInsurance />
                </Route>
                <Route path="/payments">
                    <Payments />
                </Route>
                <Route path="/addpayment">
                    <AddPayment />
                </Route>
                {/* <Route path="/login">
                    <Modal login />
                </Route> */}
                <Route path="/login">
                    <Auth login />
                </Route>
                <Route path="/register">
                    <Auth register />
                </Route>
                <Route path="/forgotpassword">
                    <Auth forgotpassword />
                </Route>
                <Route path="/resetpassword">
                    <Auth resetpassword />
                </Route>

                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
