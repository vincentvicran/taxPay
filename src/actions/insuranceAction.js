import axios from 'axios';
import {
    ALL_INSURANCES_REQUEST,
    ALL_INSURANCES_SUCCESS,
    ALL_INSURANCES_FAIL,
    ADD_INSURANCE_REQUEST,
    ADD_INSURANCE_SUCCESS,
    ADD_INSURANCE_FAIL,
} from '../constants/insuranceConstants';

export const getInsurances = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_INSURANCES_REQUEST,
        });

        const { data } = await axios.get(`api/v1/insurances`);

        dispatch({
            type: ALL_INSURANCES_SUCCESS,
            payload: data.insurances,
        });
    } catch (error) {
        dispatch({
            ALL_INSURANCES_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const addInsurance = (vehicleId) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_INSURANCE_REQUEST,
        });

        const { data } = await axios.post(`api/v1/insurances/${vehicleId}`);

        dispatch({
            type: ADD_INSURANCE_SUCCESS,
            payload: data.insurance,
        });
    } catch (error) {
        dispatch({
            ADD_INSURANCE_FAIL,
            payload: error.response.data.message,
        });
    }
};
