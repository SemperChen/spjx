import React, {Component} from 'react';
import {Button, Container, Content, Icon, Input, Item, Text, Spinner} from 'native-base';
import {connect} from "react-redux";
import {WIDTH} from "./Home";
import {activeTintColor, REQUEST_NET_FAILED} from "../constants/constants";
import {StatusBar} from "react-native";
import ToastUtil from "../utils/ToastUtil";
import {NavigationActions, StackActions} from "react-navigation";
import {clearLogin, requestLogin} from "../actions/login";
import {loginUrl, registerUrl} from "../constants/api";
import {saveAppConfig} from "../utils/ConfigUtil";

const _findIndex = require('lodash/findIndex');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReadyLogin: true
        }
    }

    // _navToHome = () => {
    //     this.props.navigation.navigate('Home')
    // };
    /**
     * 导航到主页
     *
     * 导航到详请观看视频信息页面
     * @private
     */
    _navToHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Tab'})],
        });
        this.props.navigation.dispatch(resetAction);
    };

    /**
     * 注册
     * @private
     */
    _register = () => {

        let body = {username: this.username, password: this.password};

        this.props.dispatch(requestLogin(registerUrl, body))
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.loginData !== nextProps.loginData ||
            this.props.isFetching !== nextProps.isFetching ||
            this.state.isReadyLogin !== nextState.isReadyLogin
    }

    /**
     * 登录
     * @private
     */
    _login = () => {
        let body = {username: this.username, password: this.password};

        this.props.dispatch(requestLogin(loginUrl, body))
    };

    render() {
        if (this.props.loginData) {
            if (this.props.loginData === REQUEST_NET_FAILED) {
                ToastUtil.showShort('请求失败！')

            }else {
                if(this.props.loginData.isLogin){
                    AppConfig.loginData.isLogin = true;
                    AppConfig.loginData.user = this.props.loginData.user;
                    saveAppConfig(AppConfig)
                    this._navToHome()
                    // console.log('this.props.loginData',this.props.loginData)
                }else {
                    ToastUtil.showShort(this.props.loginData.msc);
                }
            }
            this.props.dispatch(clearLogin());
        }
        return (
            <Container style={{padding: 40,}}>
                <StatusBar
                    backgroundColor={activeTintColor}
                    barStyle="light-content"
                />
                <Content style={{marginTop: WIDTH / 6}}>
                    <Item rounded style={{marginBottom: 20}}>
                        <Icon color={activeTintColor} style={{color: activeTintColor}} active name='person'/>

                        <Input
                            onChangeText={(username) => this.username = username}
                            placeholder='用户名'/>
                    </Item>
                    <Item rounded style={{marginBottom: 20}}>
                        <Icon color={activeTintColor} style={{color: activeTintColor}} active name='lock'/>

                        <Input
                            onChangeText={(password) => this.password = password}
                            placeholder='密码'/>
                    </Item>

                    <Button
                        style={{}}
                        onPress={() => {
                            if (this.username && this.password) {
                                if (this.state.isReadyLogin) {
                                    this._login()
                                } else {
                                    this._register()
                                }

                            } else {
                                ToastUtil.showLong('用户名或密码不能为空！')
                            }
                        }}
                        color={activeTintColor} rounded block>

                        {
                            this.props.isFetching
                                ?
                                <Spinner color={'#fff'}/>
                                : <Text>{this.state.isReadyLogin ? '登录' : '注册'}</Text>

                        }
                    </Button>

                    <Item
                        onPress={() => {
                            this.setState((prevState) => ({
                                isReadyLogin: !prevState.isReadyLogin
                            }))
                        }}
                        style={{justifyContent: 'center', alignItems: 'center', borderColor: '#fff', padding: 20}}>

                        <Text>{this.state.isReadyLogin ? '注册' : '登录'}</Text>

                    </Item>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const {loginData, isFetching} = state.login;
    return {loginData, isFetching}
}

export default connect(mapStateToProps)(Login)
