import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div className="forgotPassword">
            <div className="forgotPasswordBody">
                <div className="forgotPasswordTitle">Forgot you password?</div>

                <form className="forgotPasswordForm">
                    <span className="forgotPasswordInfo">Please provide a verified email!</span>
                    <div className="forgotPasswordItem">
                        <label className="showTitle">Email</label>
                        <input type="text" placeholder="Email" className="forgotPasswordInput" />
                    </div>
                    <button className="forgotPasswordBodyButton">Next</button>
                </form>
                <div className="forgotPasswordFooter">
                    <div className="forgotPasswordFooterLeft">
                        <Link to="/login">Have an existing account?</Link>
                    </div>
                    <div className="forgotPasswordFooterLeft">
                        <Link to="/register">Want a new account?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ResetPassword() {
    return (
        <div className="resetPassword">
            <div className="resetPasswordBody">
                <div className="resetPasswordTitle">Reset you password</div>

                <form className="resetPasswordForm">
                    <div className="resetPasswordItem">
                        <label className="showTitle">Token</label>
                        <input type="token" placeholder="Token received from email" className="resetPasswordInput" />
                    </div>
                    <div className="resetPasswordItem">
                        <label className="userShowTitle">New Password</label>
                        <input type="password" placeholder="New Password" className="resetPasswordInput" />
                    </div>
                    <div className="resetPasswordItem">
                        <label className="userShowTitle">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="resetPasswordInput" />
                    </div>
                    <button className="resetPasswordBodyButton">Reset</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
