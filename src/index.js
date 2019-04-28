import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppWithNavigationState from './AppWithNavigationState';
import rootSaga from "./sagas/index";
import {Root as Rt} from "native-base";
const store = configureStore();
store.runSaga(rootSaga);
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
global.globalMyPoems=[];

import './commons/AppConfig';//全局变量配置
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
