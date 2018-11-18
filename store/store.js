import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import mainReducer from '../reducers';

const createStoreWithMiddleware = (reducer)=> createStore(reducer, {}, applyMiddleware(logger, promiseMiddleware()));

const store = createStoreWithMiddleware(mainReducer);

export default store;
