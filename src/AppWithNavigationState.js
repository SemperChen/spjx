import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppNavigator from './navigators/AppNavigator';
import {BackHandler, Platform, ToastAndroid} from "react-native";
import {NavigationActions} from 'react-navigation';
import {navigationPropConstructor} from './utils/redux';
import {initializeListeners} from 'react-navigation-redux-helpers/src/middleware';
import RNExitApp from 'react-native-exit-app';

class AppWithNavigationState extends Component {

    componentDidMount() {
        initializeListeners('root', this.props.nav);
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);//添加安卓返回键监听
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);//移除安卓返回键监听
        }
    }

    /**
     * //点击安卓返回键执行以下方法，点击一次2000毫秒内再点一次退出应用
     * @returns {boolean}
     */
    onBackAndroid = () => {
        try{
            if (this.index===0) {
                if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                    RNExitApp.exitApp();
                    // AppRegistry.unmountApplicationComponentAtRootTag(1);
                    return false;
                }
                this.lastBackPressed = Date.now();
                ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
                return true;
            }
            this.props.dispatch(NavigationActions.back());
            return true
        }catch(e){
            console.log('AppWithNavigationState onBackAndroid', e.message)
        }
    };

    render() {
        const {dispatch, nav} = this.props;
        this.index = nav.index;
        // this.currentRouteName = nav.routes[nav.index].routeName;
        this._navigation = navigationPropConstructor(
            dispatch,
            nav,
            AppNavigator.router,
            () => this._navigation
        );        return (
            <AppNavigator
                navigation={this._navigation}
            />
        );
    }
}

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const {nav} = state;
    return {nav}
}

export default connect(mapStateToProps)(AppWithNavigationState);
