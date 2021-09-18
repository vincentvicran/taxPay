import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, forgotPassword, resetPassword, clearErrors } from '../../../actions/userActions';
import { useEffect } from 'react';
import Loader from '../../../Loader';

function ForgotPassword() {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    //* PASSWORD HANDLERS
    const [userEmail, setEmail] = useState('');

    const { error, loading, message } = useSelector((state) => state.forgotPassword);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message);

            history.push('/resetpassword');
        }
    }, [dispatch, alert, message, error, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userEmail);
        dispatch(forgotPassword(userEmail));
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="forgotPassword">
                        <div className="forgotPasswordBody">
                            <div className="forgotPasswordTitle">Forgot your password?</div>

                            <form className="forgotPasswordForm" onSubmit={submitHandler}>
                                <span className="forgotPasswordInfo">Please provide a verified email!</span>
                                <div className="forgotPasswordItem">
                                    <label className="showTitle">Email</label>
                                    <input
                                        type="email"
                                        value={userEmail}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        className="forgotPasswordInput"
                                    />
                                </div>
                                <button className="forgotPasswordBodyButton" disabled={loading ? true : false}>
                                    Next
                                </button>
                            </form>
                            <div className="forgotPasswordFooter">
                                <div className="forgotPasswordFooterLeft">
                                    <Link to="/gov/login">Have an existing account?</Link>
                                </div>
                                <div className="forgotPasswordFooterLeft">
                                    <Link to="/gov/register">Want a new account?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export function ResetPassword() {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const [token, setToken] = useState('Token received from email!');

    //* PASSWORD HANDLERS
    const [passwordUpdate, setPasswordUpdate] = useState({
        userPassword: '',
        passwordConfirm: '',
    });

    const { userPassword, passwordConfirm } = passwordUpdate;

    const { loading, error, status } = useSelector((state) => state.forgotPassword);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (status === 'success') {
            alert.success('Password reset successfully!');
            dispatch(loadUser());

            history.push('/');
        }
    }, [dispatch, alert, status, error, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(token, passwordUpdate));
    };

    const onPasswordChange = (e) => {
        console.log(e.target.name);
        setPasswordUpdate({ ...passwordUpdate, [e.target.name]: e.target.value });
    };
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="resetPassword">
                        <div className="resetPasswordBody">
                            <div className="resetPasswordTitle">Reset you password</div>

                            <form className="resetPasswordForm" onSubmit={submitHandler}>
                                <div className="resetPasswordItem">
                                    <label className="showTitle">Token</label>
                                    <input
                                        type="text"
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                        className="resetPasswordInput"
                                    />
                                </div>
                                <div className="resetPasswordItem">
                                    <label className="userShowTitle">New Password</label>
                                    <input
                                        type="password"
                                        name="userPassword"
                                        value={userPassword}
                                        onChange={onPasswordChange}
                                        className="resetPasswordInput"
                                    />
                                </div>
                                <div className="resetPasswordItem">
                                    <label className="userShowTitle">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        onChange={onPasswordChange}
                                        className="resetPasswordInput"
                                    />
                                </div>
                                <button className="resetPasswordBodyButton">Reset</button>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default ForgotPassword;
