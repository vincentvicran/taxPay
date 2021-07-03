import {
    ALL_VEHICLES_REQUEST,
    ALL_VEHICLES_SUCCESS,
    ALL_VEHICLES_FAIL,
    VEHICLE_DETAILS_REQUEST,
    VEHICLE_DETAILS_SUCCESS,
    VEHICLE_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '../constants/vehicleConstants';

export const vehicleReducer = (state = { vehicles: [] }, action) => {
    switch (action.type) {
        case ALL_VEHICLES_REQUEST:
            return {
                loading: true,
                vehicles: [],
            };

        case ALL_VEHICLES_SUCCESS:
            return {
                loading: false,
                vehicles: action.payload.data,
            };

        case ALL_VEHICLES_FAIL:
            return {
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

export const vehicleDetailsReducer = (state = { vehicle: [] }, action) => {
    switch (action.type) {
        case VEHICLE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case VEHICLE_DETAILS_SUCCESS:
            return {
                loading: false,
                vehicle: action.payload,
            };

        case VEHICLE_DETAILS_FAIL:
            return {
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
