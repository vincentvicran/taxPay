import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import axiosMiddleware from './axios-error-handler-middleware';

const middleware = applyMiddleware(promise, thunk, axiosMiddleware, createLogger());

export default middleware;
