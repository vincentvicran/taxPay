import { createStore, combineReducers, applyMiddleware } from 'redux';
// import middleware from './middlewares/middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer from './reducer';
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

// import middleware from './middlewares/middleware';

const middleware = [thunk];

let initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
