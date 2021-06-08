import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//middlewares is an array because it gets called into applymiddleware()
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
// eslint-disable-next-line
export default { store, persistor };
