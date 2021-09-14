import {
    ALL_INSURANCES_REQUEST,
    ALL_INSURANCES_SUCCESS,
    ALL_INSURANCES_FAIL,
    CLEAR_ERRORS,
} from '../constants/insuranceConstants';

export const insurancesReducer = (state = { insurances: [] }, action) => {
    switch (action.type) {
        case ALL_INSURANCES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ALL_INSURANCES_SUCCESS:
            return {
                ...state,
                loading: false,
                insurances: action.payload,
            };

        case ALL_INSURANCES_FAIL:
            return {
                loading: false,
                insurances: null,
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
