import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppReducer from '../reducers/index';
import {reactNavigationReduxMiddleware} from '../utils/redux';

const middlewares = []; //中间件列表
const {logger} = require('redux-logger');


const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
middlewares.push(reactNavigationReduxMiddleware);
/* global __DEV__  */
if (__DEV__) {
    // middlewares.push(logger);
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        debug: () => {},
        error: () => {}
    };
}else {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        debug: () => {},
        error: () => {}
    };
}

export default function configureStore() {

    return {
        ...createStore(AppReducer, applyMiddleware(...middlewares)),
        runSaga: sagaMiddleware.run
    };
}

//框架就这么配置
