import React, {Component} from 'react';
import {Button, Container, Content, Icon, Input, Item, Text} from 'native-base';
import {connect} from "react-redux";
import {WIDTH} from "./Home";
import {activeTintColor} from "../constants/constants";
import {StatusBar} from "react-native";
import ToastUtil from "../utils/ToastUtil";
import {saveAppConfig} from "../utils/ConfigUtil";
import {NavigationActions, StackActions} from "react-navigation";

const _findIndex = require('lodash/findIndex');
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            isReadyLogin:true
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
        let users = AppConfig.loginData.users;
        // console.log('users111',users)
        const index = _findIndex(users, (item)=>{
            return item.username === this.username
        });
        if(index===-1){
            AppConfig.loginData.users.push({username:this.username,password:this.password});
            AppConfig.user = {username:this.username,password:this.password}
            AppConfig.isLogin = true;
            saveAppConfig(AppConfig);
            this._navToHome()
        }else {
            ToastUtil.showLong('用户名已存在！')
        }

    };

    /**
     * 登录
     * @private
     */
    _login = () => {
        let users = AppConfig.loginData.users;
        const index = _findIndex(users, (item)=>{
            return item.username === this.username
        });
        if(index!==-1&&users[index].password===this.password){
            AppConfig.user = users[index];
            AppConfig.isLogin = true;
            saveAppConfig(AppConfig);
            this._navToHome()
        }else {
            ToastUtil.showLong('用户名或密码错误！')
        }
    };

    render() {
        return (
            <Container style={{padding:40,}}>
                <StatusBar
                    backgroundColor={activeTintColor}
                    barStyle="light-content"
                />
                <Content style={{marginTop:WIDTH/6}}>
                    <Item rounded style={{marginBottom:20}}>
                        <Icon color={activeTintColor} style={{color:activeTintColor}} active name='person' />

                        <Input
                            onChangeText={(username) => this.username=username}
                            placeholder='用户名'/>
                    </Item>
                    <Item rounded style={{marginBottom:20}}>
                        <Icon  color={activeTintColor} style={{color:activeTintColor}}  active name='lock' />

                        <Input
                            onChangeText={(password) => this.password=password}
                            placeholder='密码'/>
                    </Item>

                    <Button
                        style={{}}
                        onPress={()=>{
                            if(this.username&&this.password){
                                if(this.state.isReadyLogin){
                                    this._login()
                                }else {
                                    this._register()
                                }

                            }else {
                                ToastUtil.showLong('用户名或密码不能为空！')
                            }
                        }}
                        color={activeTintColor} rounded block>
                        <Text>{this.state.isReadyLogin?'登录':'注册'}</Text>
                    </Button>

                    <Item
                        onPress={()=>{
                            this.setState((prevState)=>({
                                isReadyLogin:!prevState.isReadyLogin
                            }))
                        }}
                        style={{justifyContent: 'center',alignItems: 'center',borderColor:'#fff',padding:20}}>

                        <Text>{this.state.isReadyLogin?'注册':'登录'}</Text>

                    </Item>
                </Content>
            </Container>
        );
    }
}
export default connect()(Login)
