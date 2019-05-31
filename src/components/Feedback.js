import React, {Component} from "react";
import {Button, Card, Container, Content, Form, Icon, Text, Textarea} from "native-base";
import {activeTintColor, inactiveTintColor} from "../constants/constants";
import {View} from 'react-native';
import {WIDTH} from "./Home";
import {connect} from "react-redux";
import {requestFeedback} from "../actions/feedback";
import {feedbackUrl} from "../constants/api";

class Feedback extends Component {
    constructor(props){
        super(props);
        this.state={
            isSuccess:false
        }
    }

    commitFeedback = () => {
        this.props.dispatch(requestFeedback(feedbackUrl))
    }

    render() {
        return (
            <Container>

                {this.state.isSuccess?
                    <View style={{width:WIDTH,height:WIDTH/2,justifyContent: 'center',alignItems: 'center'}}>
                        <Card  style={{backgroundColor:inactiveTintColor,width:80,height:80,borderRadius:40,justifyContent: 'center',alignItems: 'center'}}>
                            <Icon name="checkmark" fontSize={15} style={{color:'#fff'}}/>
                        </Card>

                        <Text style={{fontSize:18,color:inactiveTintColor,marginTop: 10}}>反馈成功</Text>
                    </View>:null}

                {
                    !this.state.isSuccess?
                        <View style={{flex:1}}>
                            <Content padder>
                                <Form>
                                    <Textarea rowSpan={5} bordered placeholder="输入内容" />
                                </Form>
                            </Content>
                            <Button
                                onPress={()=>{
                                    this.commitFeedback();
                                    this.setState((prevState)=>({
                                        isSuccess:!prevState.isSuccess
                                    }))
                                }}
                                color={activeTintColor} full>
                                <Text>提交</Text>
                            </Button>
                        </View>
                        :null
                }
            </Container>
        );
    }
}

export default connect()(Feedback)