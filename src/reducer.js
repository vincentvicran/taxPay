import { combineReducers } from 'redux';
import { vehiclesReducer, vehicleDetailReducer } from './reducers/vehicleReducers';
import { authReducer, forgotPasswordReducer, userReducer } from './reducers/userReducers';
import { insurancesReducer } from './reducers/insuranceReducers';

export default combineReducers({
    vehicles: vehiclesReducer,
    vehicleDetail: vehicleDetailReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    insurances: insurancesReducer,
});
