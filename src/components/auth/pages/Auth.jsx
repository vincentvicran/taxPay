import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword, { ResetPassword } from '../components/ForgotPassword';
import '.././shared/styles/auth.css';

function Auth(props) {
    return (
        <div className="auth">
            <div className="authBody">
                {props.login && <Login login />}
                {props.register && <Register />}
                {props.forgotpassword && <ForgotPassword />}
                {props.resetpassword && <ResetPassword />}
            </div>
        </div>
    );
}

export default Auth;
