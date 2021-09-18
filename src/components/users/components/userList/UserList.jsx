import React from 'react';
import '../.././shared/styles/users.css';
import { UserItem } from '../userItem/UserItem';

const UserList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="userCenter">
                <h2>No users found.</h2>
            </div>
        );
    }

    return (
        <>
            {props.items.map((user) => {
                <UserItem user={user} />;
            })}
        </>
    );
};

export default UserList;
