import React, { useEffect, useState } from 'react';
import { ExitToAppTwoTone } from '@material-ui/icons';
import '../shared/styles/users.css';
import { Link } from 'react-router-dom';
import { UserItem } from '../components/userItem/UserItem';
import axios from 'axios';

function Profile() {
    useEffect(() => {
        axios
            .get('https://tax-pay.herokuapp.com/api/v1/users/me')
            .then((res) => {
                console.log(res, res.message);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const user = {
        id: '1',
        userName: 'vincy07',
        role: 'user',
        userEmail: 'vvicran@gmail.com',
        userDOB: '10.10.1998',
        userContact: '9813996688',
        userAddress: 'USA',
    };
    return (
        <div className="user">
            <div className="userBody">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Profile</h1>
                    <Link to="/users" className="userLogout">
                        <div className="userLogoutIcon">
                            <ExitToAppTwoTone />
                        </div>
                        <button className="userLogoutButton">Log Out</button>
                    </Link>
                </div>
                <div className="userContainer">
                    <UserItem user={user} />
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
                                    <input type="text" placeholder="vincy07" className="userUpdateInput" />
                                </div>
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">Email</label>
                                    <input type="text" placeholder="vincy07@gmail.com" className="userUpdateInput" />
                                </div>
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">Contact</label>
                                    <input type="text" placeholder="9841999999" className="userUpdateInput" />
                                </div>
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">Address</label>
                                    <input type="text" placeholder="USA" className="userUpdateInput" />
                                </div>
                            </div>

                            <button className="userUpdateButton">Update</button>
                        </form>
                    </div>
                    <div className="userUpdatePassword">
                        <span className="userUpdateTitle">Password</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">Current Password</label>
                                    <input type="text" placeholder="Current Password" className="userUpdateInput" />
                                </div>
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">New Password</label>
                                    <input type="text" placeholder="New Password" className="userUpdateInput" />
                                </div>
                                <div className="userUpdateItem">
                                    <label className="userShowTitle">Confirm Password</label>
                                    <input type="text" placeholder="Confirm Password" className="userUpdateInput" />
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
