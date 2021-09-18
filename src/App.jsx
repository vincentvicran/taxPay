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

import { loadUser } from './actions/userActions';
import store from './store';

import ProtectedRoute from './routes/ProtectedRoute';
import TaxRates from './pages/taxRates/TaxRates';

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
                <ProtectedRoute exact path="/gov/profile" component={Profile} />
                <ProtectedRoute path="/gov/vehicles" component={Vehicles} />
                <ProtectedRoute exact path="/gov/addvehicle" component={AddVehicle} />
                <ProtectedRoute exact path="/gov/insurances" component={Insurances} />
                <ProtectedRoute exact path="/gov/addinsurance" component={AddInsurance} />
                <ProtectedRoute exact path="/gov/payments" component={Payments} />
                <ProtectedRoute exact path="/gov/addpayment" component={AddPayment} />
                <Route exact path="/gov/taxrates" component={TaxRates} />
                <Route path="/gov/login" children={<Auth login />} />
                <Route path="/gov/register" children={<Auth register />} />
                <Route path="/gov/forgotpassword" children={<Auth forgotpassword />} />
                <Route path="/gov/resetpassword" children={<Auth resetpassword />} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
