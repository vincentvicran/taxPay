import { axiosInstance } from '../routes/utils';

import {
    ALL_INSURANCES_REQUEST,
    ALL_INSURANCES_SUCCESS,
    ALL_INSURANCES_FAIL,
    ADD_INSURANCE_REQUEST,
    ADD_INSURANCE_SUCCESS,
    ADD_INSURANCE_FAIL,
    CLEAR_ERRORS,
} from '../constants/insuranceConstants';

export const getInsurances = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_INSURANCES_REQUEST,
        });

        const { data } = await axiosInstance.get(`/insurances`);

        dispatch({
            type: ALL_INSURANCES_SUCCESS,
            payload: data.insurances,
        });
    } catch (error) {
        dispatch({
            type: ALL_INSURANCES_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const addInsurance = (vehicleId, insuranceData) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_INSURANCE_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axiosInstance.post(`/insurances/${vehicleId}`, insuranceData, config);

        dispatch({
            type: ADD_INSURANCE_SUCCESS,
            payload: data.insurance,
        });
    } catch (error) {
        dispatch({
            type: ADD_INSURANCE_FAIL,
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
