import {
    ALL_PAYMENTS_REQUEST,
    ALL_PAYMENTS_SUCCESS,
    ALL_PAYMENTS_FAIL,
    CLEAR_ERRORS,
} from '../constants/paymentConstants';

export const paymentsReducer = (state = { payments: [] }, action) => {
    switch (action.type) {
        case ALL_PAYMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ALL_PAYMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                payments: action.payload,
            };

        case ALL_PAYMENTS_FAIL:
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
