import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './reducers/authReducer';
import { chatsReducer } from './reducers/chatsReducer';
import { messagesReducer } from './reducers/messagesReducer';
import { modeReducer } from './reducers/modeReducer';
import { promiseReducer } from './reducers/promiseReducer';
import { usersReducer } from './reducers/usersReducer';

const reducers = combineReducers({
    promise: promiseReducer,
    auth: authReducer,
    mode: modeReducer,
    users: usersReducer,
    chats: chatsReducer,
    messages: messagesReducer
})

const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunkMiddleware, sagaMiddleware]

export const store = createStore(reducers, applyMiddleware(...middlewares))

store.subscribe(() => console.log(store.getState()))
