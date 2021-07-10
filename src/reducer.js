import {combineReducers} from 'redux'
import { vehicleReducer, vehicleDetailsReducer } from './reducers/vehicleReducers';
import { authReducer, forgotPasswordReducer, userReducer } from './reducers/userReducers';
import VehicleReducer from './components/vehicles/reducer'
export default combineReducers({
    // vehicles: vehicleReducer,
    vehicleDetails: vehicleDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    VehicleReducer
});