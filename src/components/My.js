import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {View} from 'react-native';

import {inactiveTintColor} from "../constants/constants";
import {WIDTH} from "./Home";
export default class My extends Component {
    render() {
        return (
            <Container style={{backgroundColor:'#fafafa'}}>
                <Content>
                    <Card style={{width:WIDTH,height:WIDTH/2,justifyContent: 'center',alignItems: 'center'}}>
                        <Card  style={{backgroundColor:'#eee',width:80,height:80,borderRadius:40,justifyContent: 'center',alignItems: 'center'}}>
                            <Icon name="person" fontSize={10} style={{color:inactiveTintColor}}/>
                        </Card>
                        <Text>Semper</Text>
                    </Card>

                    <View style={{marginTop:10}}>
                        <CardItem style={{justifyContent: 'space-between'}}>
                            <Text>我的收藏</Text>
                            <Right style={{}}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem style={{justifyContent: 'space-between'}}>
                            <Text>意见反馈</Text>
                            <Right style={{}}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                    </View>

                    <View>
                        <CardItem style={{justifyContent: 'space-between'}}>
                            <Text>退出登录</Text>
                            <Right style={{}}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                    </View>
                </Content>
            </Container>
        );
    }
}
