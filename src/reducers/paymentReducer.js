import {
    ALL_PAYMENTS_REQUEST,
    ALL_PAYMENTS_SUCCESS,
    ALL_PAYMENTS_FAIL,
    ADD_PAYMENT_REQUEST,
    ADD_PAYMENT_SUCCESS,
    ADD_PAYMENT_FAIL,
    CLEAR_ERRORS,
} from '../constants/paymentConstants';

export const paymentsReducer = (state = { payments: [] }, action) => {
    switch (action.type) {
        case ALL_PAYMENTS_REQUEST:
        case ADD_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ALL_PAYMENTS_SUCCESS:
        case ADD_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                payments: action.payload,
            };

        case ALL_PAYMENTS_FAIL:
        case ADD_PAYMENT_FAIL:
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
