import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { vehicleReducer, vehicleDetailsReducer } from './reducers/vehicleReducers';
import { authReducer } from './reducers/userReducers';

const reducer = combineReducers({
    vehicles: vehicleReducer,
    vehicleDetails: vehicleDetailsReducer,
    auth: authReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
