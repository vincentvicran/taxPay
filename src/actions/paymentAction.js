import { axiosInstance } from '../routes/utils';

import {
    ALL_PAYMENTS_REQUEST,
    ALL_PAYMENTS_SUCCESS,
    ALL_PAYMENTS_FAIL,
    ADD_PAYMENT_REQUEST,
    ADD_PAYMENT_SUCCESS,
    ADD_PAYMENT_FAIL,
    CLEAR_ERRORS,
} from '../constants/paymentConstants';

export const getPayments = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PAYMENTS_REQUEST,
        });

        const { data } = await axiosInstance.get(`/payments`);

        dispatch({
            type: ALL_PAYMENTS_SUCCESS,
            payload: data.payments,
        });
    } catch (error) {
        dispatch({
            type: ALL_PAYMENTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const addPayment = (vehicleId, payment) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PAYMENT_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        const { data } = await axiosInstance.post(`/payments/${vehicleId}`, payment, config);

        dispatch({
            type: ADD_PAYMENT_SUCCESS,
            payload: data.payments,
        });
    } catch (error) {
        dispatch({
            type: ADD_PAYMENT_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getImage = (url) => async () => {
    try {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // };
        const response = await axiosInstance.get(url);

        const blob = await response.blob();
        return [URL.createObjectURL(blob), null];
    } catch (error) {
        console.error(`getImage: error occured ${error}`);
        return [null, error];
    }
};

//! CLEAR ERRORS

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
