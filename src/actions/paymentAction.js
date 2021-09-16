import axios from 'axios';
import {
    ALL_PAYMENTS_REQUEST,
    ALL_PAYMENTS_SUCCESS,
    ALL_PAYMENTS_FAIL,
    ADD_PAYMENT_REQUEST,
    ADD_PAYMENT_SUCCESS,
    ADD_PAYMENT_FAIL,
} from '../constants/paymentConstants';

export const getPayments = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PAYMENTS_REQUEST,
        });

        const { data } = await axios.get(`api/v1/payments`);

        dispatch({
            type: ALL_PAYMENTS_SUCCESS,
            payload: data.payments,
        });
    } catch (error) {
        dispatch({
            ALL_PAYMENTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const addPayments = (vehicleId) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PAYMENT_REQUEST,
        });

        const { data } = await axios.post(`api/v1/payments/${vehicleId}`);

        dispatch({
            type: ADD_PAYMENT_SUCCESS,
            payload: data.payments,
        });
    } catch (error) {
        dispatch({
            ADD_PAYMENT_FAIL,
            payload: error.response.data.message,
        });
    }
};
