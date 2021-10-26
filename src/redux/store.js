import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { promiseReducer } from './reducers/promiseReducer';

const reducers = combineReducers({
    promise: promiseReducer,
    auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))