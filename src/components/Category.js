import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import {activeTintColor, inactiveTintColor} from "../constants/constants";
import {connect} from "react-redux";
import {requestContent} from "../actions/content";
import {FlatList, Image, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import {WIDTH} from "./Home";
import {videosUrl} from "../constants/api";

class Category extends Component {

    constructor(props){
        super(props);
        this.videos = [];
        this.searchName = ''
    }

    //发起搜索视频请求
    _searchVideo = () => {
        this.props.dispatch(requestContent(videosUrl));
        // console.log('this.searchName',this.searchName)
    }

    componentDidMount() {
        const params = this.props.navigation.state.params;
        const {category} = params;
        console.log('category',category)
        if(category){
            this.searchName = category;
            this._searchVideo()
        }

    }

    componentWillUnmount() {
        this.videos = [];
    }

    render() {
        console.log('this.props.contentData',this.props.contentData)
        if(this.props.contentData){
            this.videos = [];
            let videos = this.props.contentData;
            for(let i=0;i<videos.length;i++){
                let video = videos[i];
                let index =  -1;
                if((this.searchName&&this.searchName!=='')){
                    index =  video.title.indexOf(this.searchName);
                }
                if(index!==-1){
                    this.videos.push(video)
                }
            }
            console.log('this.videos',this.videos)

        }
        return (
            <Container>

                <View style={{

                }}>

                    {this.videos.length>0?
                        <FlatList
                            contentContainerStyle={{justifyContent: 'center',alignItems: 'center',}}
                            showsVerticalScrollIndicator={false}
                            data={this.videos}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.title+index}
                        />
                        :null}
                </View>
            </Container>
        );
    }

    _navDetail = (item) => {
        this.props.navigation.navigate('Detail', {video: item})
    };

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding:20,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderColor: '#eee'

                }}
                onPress={() => {
                    this._navDetail(item)
                }}
            >
                <View style={{width:WIDTH/10*6}}>
                    <Text style={{fontSize:16,margin:5}} numberOfLines={2}>{item.title}</Text>
                    <Text style={{color:'#ccc',fontSize:12,margin:5}} numberOfLines={3}>{item.intro}</Text>
                   {/* <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin:5,
                    }}>
                        <Text style={{color:'#ccc',fontSize:12}}>精品 | </Text>
                        <Icon  size={12} color={'#ccc'} name={'eye'}/>
                        <Text style={{color:'#ccc',fontSize:12}}>  {item.viewersCount}</Text>
                    </View>*/}

                </View>

                <View style={{

                    alignItems: 'center'}}>
                    <Image source={{uri: item.img}}
                           style={{width:WIDTH/10*3,height:WIDTH/10*2.2,borderRadius:8}}
                           resizeMode='stretch'
                    />
                </View>

            </TouchableOpacity>
        )
    }

}
function mapStateToProps(state) {
    const {contentData, isFetching} = state.content;
    return {contentData, isFetching}
}
export default connect(mapStateToProps)(Category)
