import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppWithNavigationState from './AppWithNavigationState';
import rootSaga from "./sagas/index";
import {Root as Rt} from "native-base";
const store = configureStore();
store.runSaga(rootSaga);
//配置store

import './commons/AppConfig';//配置全局变量
export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <Rt>
                    <AppWithNavigationState/>
                </Rt>
            </Provider>
        );
    }
};
