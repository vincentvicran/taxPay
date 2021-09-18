import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/images/tax_logo.png';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Navbar() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    const [showNav, setShowNav] = useState(false);

    return (
        <div className="navbar">
            <NavLink to="/" className="title">
                <img className="logo" src={logo} alt="Tax Logo" />
                <span className="titleName">taxPay</span>
            </NavLink>
            <nav className="navbarMenu" onClick={() => setShowNav(!showNav)}>
                {isAuthenticated ? (
                    <ul id={showNav ? 'showNav' : 'hideNav'}>
                        <NavLink to="/" className="navbarItems">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/gov/vehicles" className="navbarItems">
                            <li>Vehicles</li>
                        </NavLink>
                        <NavLink to="/gov/insurances" className="navbarItems">
                            <li>Insurances</li>
                        </NavLink>
                        <NavLink to="/gov/payments" className="navbarItems">
                            <li>Payments</li>
                        </NavLink>
                        <NavLink to="/gov/profile" className="navbarItems">
                            <button className="profileButton">Profile</button>
                        </NavLink>
                    </ul>
                ) : (
                    <ul id={showNav ? 'showNav' : 'hideNav'}>
                        <NavLink to="/gov/login" className="navbarItems">
                            <button className="loginButton">Log In</button>
                        </NavLink>
                        <NavLink to="/gov/register" className="navbarItems">
                            <button className="registerButton">Register</button>
                        </NavLink>
                    </ul>
                )}
                <div className="burger" id={showNav ? 'burgerToggle' : ''}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
}
