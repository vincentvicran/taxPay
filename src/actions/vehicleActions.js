import { axiosInstance } from '../routes/utils';

import {
    ALL_VEHICLES_REQUEST,
    ALL_VEHICLES_SUCCESS,
    ALL_VEHICLES_FAIL,
    LOAD_VEHICLE_REQUEST,
    LOAD_VEHICLE_SUCCESS,
    LOAD_VEHICLE_FAIL,
    ADD_VEHICLE_REQUEST,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_FAIL,
    DELETE_VEHICLE_REQUEST,
    DELETE_VEHICLE_SUCCESS,
    DELETE_VEHICLE_FAIL,
    CLEAR_ERRORS,
} from '../constants/vehicleConstants';

export const getVehicles = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_VEHICLES_REQUEST,
        });

        const { data } = await axiosInstance.get('/vehicles');

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

        const { data } = await axiosInstance.get(`/vehicles/${id}`);

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

export const addVehicle = (vehicleData) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_VEHICLE_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axiosInstance.post(`/vehicles`, vehicleData, config);

        dispatch({
            type: ADD_VEHICLE_SUCCESS,
            payload: data.vehicle,
        });
    } catch (error) {
        dispatch({
            type: ADD_VEHICLE_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const deleteVehicle = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_VEHICLE_REQUEST,
        });

        console.log(id);

        const { data } = await axiosInstance.delete(`/vehicles/${id}`);

        dispatch({
            type: DELETE_VEHICLE_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: DELETE_VEHICLE_FAIL,
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
