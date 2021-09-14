import axios from 'axios';
import * as source from '../sources/userSource';

import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
} from '../constants/userConstants';

//* LOGIN
export const login = (userEmail, userPassword) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        });

        const { data } = await source.postLogin(userEmail, userPassword);

        console.log(data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message,
        });
    }
};

//* REGISTER
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_USER_REQUEST,
        });

        const { data } = await source.postRegister(userData);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

//* LOAD USER
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUEST,
        });

        const { data } = await source.getMe();

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

//* UPDATE PROFILE
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_PROFILE_REQUEST,
        });

        const { data } = await source.patchUser(userData);

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success,
        });

        dispatch({
            type: UPDATE_PROFILE_RESET,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }
};

//* UPDATE PASSWORD
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_PASSWORD_REQUEST,
        });

        const { data } = await source.patchPassword(passwords);

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.status,
        });

        dispatch({
            type: UPDATE_PASSWORD_RESET,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

//* LOGOUT USER
export const logout = () => async (dispatch) => {
    try {
        await source.getUserOut();

        dispatch({
            type: LOGOUT_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message,
        });
    }
};

//* FORGOT PASSWORD
export const forgotPassword = (userEmail) => async (dispatch) => {
    try {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST,
        });

        const { data } = await source.postForgotPassword(userEmail);

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

//* RESET PASSWORD
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({
            type: RESET_PASSWORD_REQUEST,
        });

        const { data } = await source.postResetPassword(token, passwords);

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data.status,
        });
    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

//! CLEAR ERRORS
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
