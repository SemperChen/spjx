import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Form, Item, Input, Label, Spinner, Button, Text} from 'native-base';

import {connect} from "react-redux";
import {requestLogin} from "../actions/login";
import {saveUserInfoUrl} from "../constants/api";
import ToastUtil from "../utils/ToastUtil";
import {activeTintColor} from "../constants/constants";
import {saveAppConfig} from "../utils/ConfigUtil";

class User extends Component {

    _saveUserInfo = () => {
        let user = AppConfig.loginData.user;
        let body = {
            username: this.username?this.username:user.username,
            password: this.password,
            phone: this.phone?this.phone:user.phone,
            address: this.address?this.address:user.address,
            email: this.email?this.email:user.email,
            school: this.school?this.school:user.school
        };
        this.props.dispatch(requestLogin(saveUserInfoUrl,body));
        AppConfig.loginData.user = body;
        saveAppConfig(AppConfig)
    };

    render() {
        let user = AppConfig.loginData.user;
       /* if(this.props.loginData&&this.props.loginData.isSaved){
            ToastUtil.showLong('保存成功！')

        }*/
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>用户名</Label>
                            <Input
                                onChangeText={(username) => this.username = username}
                                placeholder={user.username}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>密码</Label>
                            <Input
                                onChangeText={(password) => this.password = password}
                                placeholder='******'
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>手机</Label>
                            <Input
                                onChangeText={(phone) => this.phone = phone}
                                placeholder={user.phone}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>住宅</Label>
                            <Input
                                onChangeText={(address) => this.address = address}
                                placeholder={user.address}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>邮箱</Label>
                            <Input
                                onChangeText={(email) => this.email = email}
                                placeholder={user.email}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>学校</Label>
                            <Input
                                onChangeText={(school) => this.school = school}
                                placeholder={user.school}
                            />
                        </Item>


                        <Button
                            style={{marginTop: 40}}
                            onPress={() => {
                                this.username = user.username;
                                if (this.password) {
                                    this._saveUserInfo()
                                    ToastUtil.showLong('保存成功！')
                                } else {
                                    ToastUtil.showLong('请输入密码！')
                                }
                            }}
                            color={activeTintColor} rounded block>
                            {
                                this.props.isFetching
                                    ?
                                    <Spinner color={'#fff'}/>
                                    : <Text>保存</Text>

                            }
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    }
});

function mapStateToProps(state) {
    const {loginData, isFetching} = state.login;
    return {loginData, isFetching}
}

export default connect(mapStateToProps)(User)