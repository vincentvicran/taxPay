import {
    ALL_INSURANCES_REQUEST,
    ALL_INSURANCES_SUCCESS,
    ALL_INSURANCES_FAIL,
    ADD_INSURANCE_REQUEST,
    ADD_INSURANCE_SUCCESS,
    ADD_INSURANCE_FAIL,
    CLEAR_ERRORS,
} from '../constants/insuranceConstants';

export const insurancesReducer = (state = { insurances: [] }, action) => {
    switch (action.type) {
        case ALL_INSURANCES_REQUEST:
        case ADD_INSURANCE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ALL_INSURANCES_SUCCESS:
        case ADD_INSURANCE_SUCCESS:
            return {
                ...state,
                loading: false,
                insurances: action.payload,
            };

        case ALL_INSURANCES_FAIL:
        case ADD_INSURANCE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
