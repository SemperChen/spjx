import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import StarRating from "react-native-star-rating";
import {inactiveTintColor} from "../constants/constants";
import {connect} from "react-redux";

class Detail extends Component {

    constructor() {
        super();
        this.state = {
            isFavorite: false
        };
    }

    _navReader = () => {
        this.props.navigation.navigate('Reader')
    };

    componentWillMount(){
        const {video} = this.props.navigation.state.params;
        this.video = video
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.video
                    ?
                    <View style={{flex: 1}}>
                        <VideoPlayer
                            endWithThumbnail
                            video={{uri: this.video.video}}
                            // videoWidth={this.state.video.width}
                            // videoHeight={this.state.video.height}
                            // duration={this.state.video.duration}
                            ref={r => this.player = r}
                        />

                        <View style={{
                            padding: 20,
                            backgroundColor: '#FFF',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: '#eee'
                        }}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.video.title}</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 8
                            }}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                    <StarRating
                                        containerStyle={{
                                            justifyContent: 'flex-start'
                                        }}
                                        starStyle={{margin: 2, color: inactiveTintColor}}
                                        starSize={10}
                                        disabled={false}
                                        maxStars={5}
                                        rating={this.video.score}
                                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />

                                    <Text style={{fontSize: 12, marginLeft: 5}}>{this.video.score}分 {this.video.viewersCount}人学过</Text>

                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{
                                        fontSize: 10,
                                        borderRadius: 5,
                                        margin: 3,
                                        padding: 3,
                                        borderWidth: StyleSheet.hairlineWidth,
                                        borderColor: inactiveTintColor,
                                        color: inactiveTintColor
                                    }}>独家</Text>
                                    <Text style={{
                                        fontSize: 10,
                                        borderRadius: 5,
                                        margin: 3,
                                        padding: 3,
                                        borderWidth: StyleSheet.hairlineWidth,
                                        borderColor: inactiveTintColor,
                                        color: inactiveTintColor
                                    }}>连载</Text>
                                </View>
                            </View>

                        </View>

                        {/*<View style={{backgroundColor:'#fff',padding:20}}>
                    <Text style={{color:'#000',fontSize:18}}>查看资料</Text>
                </View>*/}

                        <View style={{padding: 20, marginTop: 5, backgroundColor: '#fff'}}>
                            <Text style={{
                                fontSize: 16,
                                marginBottom: 5,
                                paddingBottom: 5,
                                backgroundColor: '#FFF',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderColor: '#eee'
                            }}>课程简介</Text>
                            <Text>{this.video.intro}</Text>
                        </View>

                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row',
                            flex: 1,
                            padding: 5,
                            justifyContent: 'space-around',
                            backgroundColor: '#fff',
                        }}>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50%'
                                }}
                                onPress={() => {

                                }}
                            >
                                {
                                    this.state.isFavorite ?
                                        <Text style={{
                                            color: inactiveTintColor,
                                            opacity: 0.5,
                                        }}>已收藏</Text> :
                                        <Text style={{
                                            color: inactiveTintColor,
                                        }}>收藏</Text>
                                }

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: inactiveTintColor,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    width: '50%',
                                    padding: 10
                                }}
                                onPress={() => {
                                    this._navReader()
                                }}
                            >
                                <Text style={{color: '#fff'}}>阅读资料</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <Text>获取资源失败</Text>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // margin: 20,
    },
    backgroundVideo: {
        width: '100%'
    },
    banner: {
        alignSelf: 'center',
        margin: 10,
        marginBottom: '10%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        alignSelf: 'center'
    },
    intro: {
        margin: 10,
        alignSelf: 'center'
    },
    btn: {
        width: '30%',
        alignSelf: 'center',
        marginTop: 30
    }
});

export default connect()(Detail)
