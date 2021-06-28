import React from 'react';
import './navbar.css';
import logo from '../../assets/images/tax_logo.png';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn }) {
    return (
        <div className="navbar">
            <span className="title">
                <img className="logo" src={logo} alt="Tax Logo" />
                <span className="titleName">Tax</span>
            </span>
            <nav className="navbarMenu">
                {!isLoggedIn && (
                    <ul>
                        <Link to="/login" className="navbarItems">
                            <button className="loginButton">Log In</button>
                        </Link>
                        <Link to="/register" className="navbarItems">
                            <button className="registerButton">Register</button>
                        </Link>
                    </ul>
                )}
                {isLoggedIn && (
                    <ul>
                        <Link to="/" className="navbarItems">
                            <li>Home</li>
                        </Link>
                        <Link to="/vehicles" className="navbarItems">
                            <li>Vehicles</li>
                        </Link>
                        <Link to="/insurances" className="navbarItems">
                            <li>Insurances</li>
                        </Link>
                        <Link to="/payments" className="navbarItems">
                            <li>Payments</li>
                        </Link>
                        <Link to="/settings" className="navbarItems">
                            <button className="settingsButton">Settings</button>
                        </Link>
                    </ul>
                )}
            </nav>
        </div>
    );
}
