import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistStore };
