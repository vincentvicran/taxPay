import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import User from './pages/users/user/User';
import { AddVehicle } from './pages/vehicles/Vehicles';
import Vehicles from './pages/vehicles/Vehicles';

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
            </Switch>
        </Router>
    );
}
