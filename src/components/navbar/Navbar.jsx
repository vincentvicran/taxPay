import React from 'react';
import './navbar.css';
import logo from '../../assets/images/tax_logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar({ isAuthenticated }) {
    return (
        <div className="navbar">
            <NavLink to="/" className="title">
                <img className="logo" src={logo} alt="Tax Logo" />
                <span className="titleName">taxPay</span>
            </NavLink>
            <nav className="navbarMenu">
                {!isAuthenticated && (
                    <ul>
                        <NavLink to="/login" className="navbarItems">
                            <button className="loginButton">Log In</button>
                        </NavLink>
                        <NavLink to="/register" className="navbarItems">
                            <button className="registerButton">Register</button>
                        </NavLink>
                    </ul>
                )}
                {isAuthenticated && (
                    <ul>
                        <NavLink to="/" className="navbarItems">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/vehicles" className="navbarItems">
                            <li>Vehicles</li>
                        </NavLink>
                        <NavLink to="/insurances" className="navbarItems">
                            <li>Insurances</li>
                        </NavLink>
                        <NavLink to="/payments" className="navbarItems">
                            <li>Payments</li>
                        </NavLink>
                        <NavLink to="/profile" className="navbarItems">
                            <button className="profileButton">Profile</button>
                        </NavLink>
                    </ul>
                )}
            </nav>
        </div>
    );
}
