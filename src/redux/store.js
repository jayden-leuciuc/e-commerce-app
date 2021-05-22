import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//middlewares is an array because it gets called into applymiddleware()
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;