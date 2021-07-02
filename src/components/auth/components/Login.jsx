import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <div className="loginBody">
                <div className="loginTitle">Log In</div>
                <form className="loginForm">
                    <div className="loginItem">
                        <label className="showTitle">Email</label>
                        <input type="text" placeholder="Email" className="loginInput" />
                    </div>
                    <div className="loginItem">
                        <label className="showTitle">Password</label>
                        <input type="password" placeholder="Password" className="loginInput" />
                    </div>
                    <button className="loginBodyButton">Log In</button>
                </form>
                <div className="loginFooter">
                    <div className="loginFooterLeft">
                        <Link to="/register">Want a new account?</Link>
                    </div>
                    <div className="loginFooterRight">
                        <Link to="/forgotpassword">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
