import axios from 'axios';
// import '../utils/http-common';

import {
    ALL_VEHICLES_REQUEST,
    ALL_VEHICLES_SUCCESS,
    ALL_VEHICLES_FAIL,
    VEHICLE_DETAILS_REQUEST,
    VEHICLE_DETAILS_SUCCESS,
    VEHICLE_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '../constants/vehicleConstants';

export const getVehicles = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_VEHICLES_REQUEST,
        });

        const { data } = await axios.get('api/v1/vehicles');

        dispatch({
            type: ALL_VEHICLES_SUCCESS,
            payload: data.data,
        });
    } catch (error) {
        dispatch({
            type: ALL_VEHICLES_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getVehicleDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: VEHICLE_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`api/v1/vehicles/${id}`);

        dispatch({
            type: VEHICLE_DETAILS_SUCCESS,
            payload: data.data,
        });
    } catch (error) {
        dispatch({
            type: VEHICLE_DETAILS_FAIL,
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
