import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import User from './pages/users/user/User';
import { Vehicles, AddVehicle } from './pages/vehicles/Vehicles';
import { Insurances, AddInsurance } from './pages/insurances/Insurances';

export default function App() {
    return (
        <Router>
            <Navbar isLoggedIn />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/users">
                    <User />
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
            </Switch>
        </Router>
    );
}
