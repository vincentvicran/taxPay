import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Loader from '../../../Loader';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../../actions/userActions';
import { useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

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
        dispatch(login(email, password));
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="login">
                        <div className="loginBody">
                            <div className="loginTitle">Log In</div>
                            <form className="loginForm" onSubmit={submitHandler}>
                                <div className="loginItem">
                                    <label className="showTitle">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="loginInput"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="loginItem">
                                    <label className="showTitle">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="loginInput"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
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
                </Fragment>
            )}
        </Fragment>
    );
};

export default Login;
