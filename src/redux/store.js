import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { modeReducer } from './reducers/modeReducer';
import { promiseReducer } from './reducers/promiseReducer';
import { usersReducer } from './reducers/usersReducer';

const reducers = combineReducers({
    promise: promiseReducer,
    auth: authReducer,
    mode: modeReducer,
    users: usersReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

store.subscribe(() => console.log(store.getState()))