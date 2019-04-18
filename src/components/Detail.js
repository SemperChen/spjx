import React, {Component} from 'react';
import {StatusBar, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import I18n from '../i18n/i18n';
import {AdMobBanner} from 'react-native-admob';
import Video from "react-native-video";

const VIMEO_ID = '179859217';
import VideoPlayer from 'react-native-video-player';
import StarRating from "react-native-star-rating";
import {WIDTH} from "./Home";
import {activeTintColor, inactiveTintColor, inactiveTintColor2} from "../constants/constants";
import {Button } from 'native-base';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {connect} from "react-redux";

class Detail extends Component {

    constructor() {
        super();

        this.state = {
            isFavorite:false
        };
    }

    _navReader = (item) => {
        this.props.navigation.navigate('Reader')
    };

    componentDidMount() {
        /*global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
            .then(res => res.json())
            .then(res => this.setState({
                thumbnailUrl: res.video.thumbs['640'],
                videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
                video: res.video,
            }));*/
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <VideoPlayer
                    endWithThumbnail
                    video={{uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'}}
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
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>系统安装与重装的高手之路</Text>
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
                                starStyle={{margin: 3, color: inactiveTintColor}}
                                starSize={10}
                                disabled={false}
                                maxStars={5}
                                rating={3.5}
                                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />

                            <Text style={{fontSize: 12, marginLeft: 5}}>4.4 540人学过</Text>

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
                    <Text>本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。
                        After
                        Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，电视广告、片头动画都出自AE合成。</Text>
                </View>

                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex:1,
                    padding:5,
                    justifyContent: 'space-around',
                    backgroundColor:'#fff',
                }}>
                    <TouchableOpacity
                        style={{
                            alignItems:'center',
                            justifyContent:'center',
                            width:'50%'
                        }}
                        onPress={()=>{

                        }}
                    >
                        {
                            this.state.isFavorite?
                                <Text style={{
                                    color:inactiveTintColor,
                                    opacity:0.5,
                                }}>已收藏</Text>:
                                <Text style={{
                                    color:inactiveTintColor,
                                }}>收藏</Text>
                        }

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            alignItems:'center',
                            backgroundColor:inactiveTintColor,
                            borderRadius:10,
                            justifyContent:'center',
                            width:'50%',
                            padding:10
                        }}
                        onPress={()=>{
                            this._navReader()
                        }}
                    >
                        <Text style={{color:'#fff'}}>阅读资料</Text>
                    </TouchableOpacity>
                </View>

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
