import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {View,TouchableOpacity} from 'react-native';

import {inactiveTintColor} from "../constants/constants";
import {WIDTH} from "./Home";
import {NavigationActions, StackActions} from "react-navigation";
import {saveAppConfig} from "../utils/ConfigUtil";
export default class My extends Component {

    _retNavLogin = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
        });
        this.props.navigation.dispatch(resetAction);
    };

    navToFeedback = () =>{
        this.props.navigation.navigate('Feedback')
    };

    _navToCollect = () =>{
        this.props.navigation.navigate('Collect')
    };


    render() {
        return (
            <Container style={{backgroundColor:'#fafafa'}}>
                <Content>
                    <Card style={{width:WIDTH,height:WIDTH/2,justifyContent: 'center',alignItems: 'center'}}>
                        <Card  style={{backgroundColor:'#eee',width:80,height:80,borderRadius:40,justifyContent: 'center',alignItems: 'center'}}>
                            <Icon name="person" fontSize={10} style={{color:inactiveTintColor}}/>
                        </Card>
                        <Text>{AppConfig.user.username}</Text>
                    </Card>

                    <TouchableOpacity
                        onPress={()=>{
                            this._navToCollect()
                        }}
                        style={{marginTop:10}}>
                        <CardItem style={{justifyContent: 'space-between'}}>
                            <Text>我的收藏</Text>
                            <Right style={{}}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{
                            this.navToFeedback()
                        }}
                    >
                        <CardItem style={{justifyContent: 'space-between'}}>
                            <Text>意见反馈</Text>
                            <Right style={{}}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{
                            AppConfig.isLogin = false;
                            AppConfig.user = null;
                            saveAppConfig(AppConfig);
                            this._retNavLogin()
                        }}
                    >
                        <CardItem

                            style={{justifyContent: 'space-between'}}>
                            <Text>退出登录</Text>
                            <Right style={{}}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}
