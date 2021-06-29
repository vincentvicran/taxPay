import React from 'react';
import {
    CalendarToday,
    ExitToAppTwoTone,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
} from '@material-ui/icons';
import './user.css';
import { Link } from 'react-router-dom';

function User() {
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
                    <div className="userShow">
                        <div className="userShowTop">
                            <img
                                src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt=""
                                className="userShowImg"
                            />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">vincy07</span>
                                <span className="userShowUserTitle">User</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon" />
                                <span className="userShowInfoTitle">vincy07</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon" />
                                <span className="userShowInfoTitle">10.10.1998</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon" />
                                <span className="userShowInfoTitle">9841999999</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon" />
                                <span className="userShowInfoTitle">vincy07@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon" />
                                <span className="userShowInfoTitle">USA</span>
                            </div>
                        </div>
                    </div>
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
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
