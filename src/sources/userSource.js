import { request, updateAccessToken } from '../utils/request';

export const getUsers = () => {
    return request.get('users');
};

export const getMe = () => {
    return request.get('users/me');
};

export const postLogin = (userEmail, userPassword) => {
    return request.post('users/login', { userEmail, userPassword });
};

export const postRegister = (userData) => {
    return request.post('users/register', userData);
};

export const patchUser = (userData) => {
    return request.patch('users/updateme', userData);
};

export const patchPassword = (passwords) => {
    return request.patch('users/updatepassword', passwords);
};

export const getUserOut = () => {
    return request.get('users/logout');
};

export const postForgotPassword = (userEmail) => {
    return request.patch('users/forgotpassword', { userEmail });
};

export const postResetPassword = (token, passwords) => {
    return request.patch(`users/resetpassword/${token}`, passwords);
};
