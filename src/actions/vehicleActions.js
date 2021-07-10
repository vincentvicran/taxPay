import axios from 'axios';
// import '../utils/http-common';

import {
    ALL_VEHICLES_REQUEST,
    ALL_VEHICLES_SUCCESS,
    ALL_VEHICLES_FAIL,
    LOAD_VEHICLE_REQUEST,
    LOAD_VEHICLE_SUCCESS,
    LOAD_VEHICLE_FAIL,
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
            payload: data.vehicles,
        });
    } catch (error) {
        dispatch({
            type: ALL_VEHICLES_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const loadVehicle = (id) => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_VEHICLE_REQUEST,
        });

        console.log(id);

        const { data } = await axios.get(`api/v1/vehicles/${id}`);

        dispatch({
            type: LOAD_VEHICLE_SUCCESS,
            payload: data.vehicle,
        });
    } catch (error) {
        dispatch({
            type: LOAD_VEHICLE_FAIL,
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
