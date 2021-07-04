import axios from 'axios';

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
} from '../constants/userConstants';

//* LOGIN
export const login = (userEmail, userPassword) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(`api/v1/users/login`, { userEmail, userPassword }, config);

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

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(`api/v1/users/register`, userData, config);

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

        const { data } = await axios.get(`api/v1/users/me`);

        dispatch({
            type: LOAD_USER_SUCCESS,
            // payload: data.data.user,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
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
