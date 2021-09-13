import { createStore, combineReducers, applyMiddleware } from 'redux';
import middleware from './middlewares/middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer, forgotPasswordReducer, userReducer } from './reducers/userReducers';
import { vehiclesReducer, vehicleDetailReducer } from './reducers/vehicleReducers';
import { insurancesReducer } from './reducers/insuranceReducers';

const reducer = combineReducers({
    vehicles: vehiclesReducer,
    vehicleDetail: vehicleDetailReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    insurances: insurancesReducer,
});

let initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(middleware));

export default store;
