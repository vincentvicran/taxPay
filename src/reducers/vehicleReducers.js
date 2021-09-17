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

export const vehiclesReducer = (state = { vehicles: [], vehicle: {} }, action) => {
    switch (action.type) {
        case ALL_VEHICLES_REQUEST:
        case ADD_VEHICLE_REQUEST:
        case DELETE_VEHICLE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ALL_VEHICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicles: action.payload,
            };

        case ADD_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicle: action.payload,
                message: 'Success!',
            };

        case DELETE_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };

        case ALL_VEHICLES_FAIL:
        case ADD_VEHICLE_FAIL:
        case DELETE_VEHICLE_FAIL:
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

export const vehicleDetailReducer = (state = { vehicle: [] }, action) => {
    switch (action.type) {
        case LOAD_VEHICLE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case LOAD_VEHICLE_SUCCESS:
            return {
                loading: false,
                vehicle: action.payload,
            };

        case LOAD_VEHICLE_FAIL:
            return {
                ...state,
                loading: false,
                vehicle: null,
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

// export const userReducer = (state = {}, action) => {
//     switch (action.type) {
//         case UPDATE_PROFILE_REQUEST:
//         case UPDATE_PASSWORD_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             };

//         case UPDATE_PASSWORD_SUCCESS:
//             if (action.payload === 'success') {
//                 return {
//                     ...state,
//                     loading: false,
//                     isUpdated: true,
//                 };
//             }
//             break;

//         case UPDATE_PROFILE_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 isUpdated: action.payload,
//             };

//         case UPDATE_PASSWORD_RESET:
//         case UPDATE_PROFILE_RESET:
//             return {
//                 ...state,
//                 isUpdated: false,
//             };

//         case UPDATE_PASSWORD_FAIL:
//         case UPDATE_PROFILE_FAIL:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };
