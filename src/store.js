import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
