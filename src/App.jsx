import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import './app.css';

import Profile from './components/users/pages/Profile';
import AddVehicle from './components/vehicles/pages/AddVehicle';
import Vehicles from './components/vehicles/pages/Vehicles';
// import VehicleDetails from './components/vehicles/pages/VehicleDetails';
import Insurances from './components/insurances/pages/Insurances';
import AddInsurance from './components/insurances/pages/AddInsurance';
import Payments from './components/payments/pages/Payments';
import AddPayment from './components/payments/pages/AddPayment';
import Auth from './components/auth/pages/Auth';
// import Vehicle from './components/vehicles/pages/Vehicle';
import TaxRates from './components/taxRates/TaxRates';

import { loadUser } from './actions/userActions';
import store from './store';

import ProtectedRoute from './routes/ProtectedRoute';

export default function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    });
    return (
        <Router>
            {/* {user ? <Navbar isAuthenticated /> : !loading && <Navbar />} */}
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute exact path="/vehicles" component={Vehicles} />
                {/* <ProtectedRoute exact path="/vehicle/:id" component={Vehicle} /> */}
                {/* <ProtectedRoute exact path="/vehicles/:id" component={VehicleDetails} /> */}
                <ProtectedRoute exact path="/addvehicle" component={AddVehicle} />
                <ProtectedRoute exact path="/insurances" component={Insurances} />
                <ProtectedRoute exact path="/addinsurance" component={AddInsurance} />
                <ProtectedRoute exact path="/payments" component={Payments} />
                <ProtectedRoute exact path="/addpayment" component={AddPayment} />
                <Route exact path="/taxrates" component={TaxRates} />
                <Route path="/login" children={<Auth login />} />
                <Route path="/register" children={<Auth register />} />
                <Route path="/forgotpassword" children={<Auth forgotpassword />} />
                <Route path="/resetpassword" children={<Auth resetpassword />} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
