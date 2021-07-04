import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Loader from '../../../Loader';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearErrors } from '../../../actions/userActions';
import { useEffect } from 'react';

function Register() {
    const [user, setUser] = useState({
        userName: '',
        userEmail: '',
        userDOB: '',
        userAddress: '',
        userContact: '',
        userPassword: '',
        passwordConfirm: '',
    });

    const { userName, userEmail, userDOB, userAddress, userContact, userPassword, passwordConfirm } = user;

    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, history]);

    const submitHandler = (e) => {
        e.preventDefault();

        // const formData = new FormData();

        // formData.set('userName', userName);
        // formData.set('userEmail', userEmail);
        // formData.set('userDOB', userDOB);
        // formData.set('userAddress', userAddress);
        // formData.set('userContact', userContact);
        // formData.set('userPassword', userPassword);
        // formData.set('passwordConfirm', passwordConfirm);

        dispatch(register(user));
    };

    const onChange = (e) => {
        console.log(e.target.name);
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="register">
                        <div className="registerBody">
                            <div className="registerTitle">Register</div>

                            <form className="registerForm" onSubmit={submitHandler}>
                                <div className="registerLeft">
                                    <div className="registerItem">
                                        <label className="showTitle">Username</label>
                                        <input
                                            type="text"
                                            className="registerInput"
                                            name="userName"
                                            value={userName}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="registerItem">
                                        <label className="showTitle">Email</label>
                                        <input
                                            type="email"
                                            className="registerInput"
                                            name="userEmail"
                                            value={userEmail}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="registerItem">
                                        <label className="showTitle">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="registerInput"
                                            name="userDOB"
                                            value={userDOB}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="registerItem">
                                        <label className="showTitle">Contact</label>
                                        <input
                                            type="text"
                                            className="registerInput"
                                            name="userContact"
                                            value={userContact}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="registerRight">
                                    <div className="registerItem">
                                        <label className="showTitle">Address</label>
                                        <input
                                            type="text"
                                            className="registerInput"
                                            name="userAddress"
                                            value={userAddress}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="registerItem">
                                        <label className="showTitle">Password</label>
                                        <input
                                            type="password"
                                            className="registerInput"
                                            name="userPassword"
                                            value={userPassword}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="registerItem">
                                        <label className="showTitle">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="registerInput"
                                            name="passwordConfirm"
                                            value={passwordConfirm}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="registerBodyBottom">
                                    <button className="registerBodyButton">Register</button>
                                </div>
                            </form>
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
                </Fragment>
            )}
        </Fragment>
    );
}

export default Register;
