import React from 'react';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons';
import '../../shared/styles/users.css';

import { useSelector } from 'react-redux';

export const UserItem = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="userShow">
            <div className="userShowTop">
                <img
                    src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                    alt=""
                    className="userShowImg"
                />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">{user.userName}</span>
                    <span className="userShowUserTitle">{user.role}</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">{user.userName}</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">{user.userDOB}</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">{user.userContact}</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">{user.userEmail}</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">{user.userAddress}</span>
                </div>
            </div>
        </div>
    );
};
