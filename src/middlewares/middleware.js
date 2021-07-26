import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import axiosMiddleware from './axios-error-handler-middleware';

export default applyMiddleware(axiosMiddleware, promise, thunk, createLogger());
