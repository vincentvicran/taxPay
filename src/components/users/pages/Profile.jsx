import React, { Fragment, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ExitToAppTwoTone } from '@material-ui/icons';
import '../shared/styles/users.css';
import { UserItem } from '../components/userItem/UserItem';

import Loader from '../../../Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { updateProfile, loadUser, updatePassword, logout, clearErrors } from '../../../actions/userActions';

function UpdatePassword() {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    //* PASSWORD HANDLERS
    const [passwordUpdate, setPasswordUpdate] = useState({
        passwordCurrent: '',
        userPassword: '',
        passwordConfirm: '',
    });

    const { passwordCurrent, userPassword, passwordConfirm } = passwordUpdate;

    const { loading, error, isUpdated } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Password udpated successfully!');
            dispatch(loadUser());

            history.push('/gov/profile');
        }
    }, [dispatch, alert, isUpdated, error, history]);

    const submitPasswordHandler = (e) => {
        e.preventDefault();

        dispatch(updatePassword(passwordUpdate));
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
                    <div className="userUpdatePassword">
                        <span className="userUpdateTitle">Password</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">Current Password</label>
                                    <input
                                        type="password"
                                        name="passwordCurrent"
                                        value={passwordCurrent}
                                        onChange={onPasswordChange}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">New Password</label>
                                    <input
                                        type="password"
                                        name="userPassword"
                                        value={userPassword}
                                        onChange={onPasswordChange}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        onChange={onPasswordChange}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <button className="userUpdateButton" onClick={submitPasswordHandler}>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

function Profile() {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    //* USER HANDLERS
    const [updateUser, setUpdateUser] = useState({
        userName: '',
        userEmail: '',
        userDOB: '',
        userContact: '',
    });

    const { userName, userEmail, userAddress, userContact } = updateUser;

    const { user } = useSelector((state) => state.auth);
    const { loading, error, isUpdated } = useSelector((state) => state.user);

    useEffect(() => {
        // if (user) {
        //     setUpdateUser(user);
        // }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User udpated successfully!');
            dispatch(loadUser());

            history.push('/gov/profile');
        }
    }, [dispatch, alert, isUpdated, error, history, user]);

    const submitUpdateHandler = (e) => {
        e.preventDefault();

        dispatch(updateProfile(updateUser));
    };

    const onUpdateChange = (e) => {
        console.log(e.target.name);
        setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
    };

    //* LOGOUT HANDLER
    const logoutHandler = () => {
        dispatch(logout());
        if (error) {
            alert.error(error);
        } else {
            alert.success('Logged out successfully!');
        }
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="user">
                        <div className="userBody">
                            <div className="userTitleContainer">
                                <h1 className="userTitle">Profile</h1>
                                <Link to="/gov/users" className="userLogout">
                                    <div className="userLogoutIcon">
                                        <ExitToAppTwoTone />
                                    </div>
                                    <button className="userLogoutButton" onClick={logoutHandler}>
                                        Log Out
                                    </button>
                                </Link>
                            </div>
                            <div className="userContainer">
                                <UserItem />
                                <div className="userUpdate">
                                    <div className="userUpdateTitle">Details</div>

                                    <form className="userUpdateForm">
                                        <div className="userUpdateLeft">
                                            {/* <div className="userUpdateItem">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Vikrant Shrestha" className="userUpdateInput" />
                                    </div> */}
                                            <div className="userUpdateItem">
                                                <label className="userShowTitle">Username</label>
                                                <input
                                                    type="text"
                                                    name="userName"
                                                    value={userName}
                                                    onChange={onUpdateChange}
                                                    className="userUpdateInput"
                                                />
                                            </div>
                                            <div className="userUpdateItem">
                                                <label className="userShowTitle">Email</label>
                                                <input
                                                    type="email"
                                                    name="userEmail"
                                                    value={userEmail}
                                                    onChange={onUpdateChange}
                                                    className="userUpdateInput"
                                                />
                                            </div>
                                            <div className="userUpdateItem">
                                                <label className="userShowTitle">Contact</label>
                                                <input
                                                    type="text"
                                                    name="userContact"
                                                    value={userContact}
                                                    onChange={onUpdateChange}
                                                    className="userUpdateInput"
                                                />
                                            </div>
                                            <div className="userUpdateItem">
                                                <label className="userShowTitle">Address</label>
                                                <input
                                                    type="text"
                                                    name="userAddress"
                                                    value={userAddress}
                                                    onChange={onUpdateChange}
                                                    className="userUpdateInput"
                                                />
                                            </div>
                                        </div>

                                        <button className="userUpdateButton" onClick={submitUpdateHandler}>
                                            Update
                                        </button>
                                    </form>
                                </div>
                                <UpdatePassword />
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default Profile;
