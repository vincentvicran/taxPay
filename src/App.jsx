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

export default function App() {
    return (
        <React.Fragment className="container">
            <Router>
                <Navbar isLoggedIn />
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
                    {/* <Route path="/userlist">
                        <UserList />
                    </Route> */}
                    <Redirect to="/" />
                </Switch>
            </Router>
        </React.Fragment>
    );
}
