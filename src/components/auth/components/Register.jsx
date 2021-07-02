import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="register">
            <div className="registerBody">
                <div className="registerTitle">Register</div>

                <form className="registerForm">
                    <div className="registerLeft">
                        <div className="registerItem">
                            <label className="showTitle">Username</label>
                            <input type="text" placeholder="Username" className="registerInput" />
                        </div>
                        <div className="registerItem">
                            <label className="showTitle">Email</label>
                            <input type="email" placeholder="Email" className="registerInput" />
                        </div>
                        <div className="registerItem">
                            <label className="showTitle">Date of Birth</label>
                            <input type="date" className="registerInput" />
                        </div>
                    </div>
                    <div className="registerRight">
                        <div className="registerItem">
                            <label className="showTitle">Address</label>
                            <input type="text" placeholder="Address" className="registerInput" />
                        </div>
                        <div className="registerItem">
                            <label className="showTitle">Password</label>
                            <input type="password" placeholder="Password" className="registerInput" />
                        </div>
                        <div className="registerItem">
                            <label className="showTitle">Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" className="registerInput" />
                        </div>
                    </div>
                </form>
                <button className="registerBodyButton">Register</button>
                <div className="registerFooter">
                    <div className="registerFooterLeft">
                        <Link to="/login">Have an existing account?</Link>
                    </div>
                    <div className="registerFooterRight">
                        <Link to="/forgotpassword">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
