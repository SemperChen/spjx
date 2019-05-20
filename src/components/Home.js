import React, {Component} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {connect} from 'react-redux';
import {requestContent} from '../actions/content';
import {activeTintColor} from "../constants/constants";
import {baseUrl, videosUrl} from "../constants/api";
import Carousel from "react-native-snap-carousel";
import {fetchSpreadData} from "../utils/HttpUtil";

export const WIDTH = Dimensions.get('window').width;
const _sortBy = require('lodash/sortBy')
/***********************************************************************************************************************
 *书签排序
 */
const sortBy = function (name) {
    return function (o, p) {
        let a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a > b ? -1 : 1;
            }
            return typeof a > typeof b ? -1 : 1;
        }
        else {
            throw ("BookmarkUtil sortBy error");
        }
    }
};
class Home extends Component {

    componentDidMount() {
        this.props.dispatch(requestContent(videosUrl));
    }

    /**
     * 导航到详请观看视频信息页面
     * @param item 传入video视频信息
     * @private
     */
    _navDetail = (item) => {
        this.props.navigation.navigate('Detail', {video: item})
    };

    /**
     * 导航到分类
     * @param category
     * @private
     */
    _navToCategory = (category) => {
        this.props.navigation.navigate('Category', {category: category})
    };

    /**
     * 轮播item
     * @param item
     * @param index
     * @returns {*}
     * @private
     */
    _renderItemCarousel = ({item,index}) => {
        return (
            <TouchableHighlight
                onPress={() => {
                    this._navDetail(item)
                }}
                style={{width: WIDTH, height: WIDTH / 3}}
                underlayColor='#fff'
            >
                <Image resizeMode='cover' source={{uri:baseUrl+item.img}}
                       style={{width: WIDTH, height: WIDTH / 3}}/>
            </TouchableHighlight>
        )
    };

    render() {
        // console.log('contentData',this.props.contentData)
        if(this.props.contentData){
            this.props.contentData.sort(sortBy('viewersCount'))
            // let contentData = sortBy('viewersCount')
            // console.log('contentData',this.props.contentData.sort(sortBy('viewersCount')))
        }
        return (
            <View>
                <StatusBar
                    backgroundColor={activeTintColor}
                    barStyle="light-content"
                />
                <View style={[styles.container]}>
                    <Carousel
                        loop={true}
                        autoplay={true}
                        ref={(c) => { this._carousel = c; }}
                        data={fetchSpreadData()}
                        renderItem={this._renderItemCarousel}
                        sliderWidth={WIDTH}
                        itemWidth={WIDTH}
                    />
                    <FlatList
                        ListHeaderComponent={()=>{
                            return(
                                <View>

                                    <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center'}}>

                                        <TouchableOpacity
                                            onPress={()=>{
                                                this._navToCategory('React')
                                            }}
                                        >
                                            <View style={{alignItems:'center'}}>
                                                <Image
                                                    resizeMode='contain'
                                                    style={{width: WIDTH/8,height:WIDTH/8,marginVertical: 5}}
                                                    source={require('../../data/img/r.png')}/>
                                                <Text style={{fontSize:10}}>React</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={()=>{
                                                this._navToCategory('React-Native')
                                            }}
                                        >
                                            <View style={{alignItems:'center'}}>
                                                <Image
                                                    resizeMode='contain'
                                                    style={{width: WIDTH/8,height:WIDTH/8,marginVertical: 5}}
                                                    source={require('../../data/img/rn.png')}/>
                                                <Text style={{fontSize:10}}>React Native</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={()=>{
                                                this._navToCategory('JAVA')
                                            }}
                                        >
                                            <View style={{alignItems:'center'}}>
                                                <Image
                                                    resizeMode='contain'
                                                    style={{width: WIDTH/8,height:WIDTH/8,marginVertical: 5}}
                                                    source={require('../../data/img/java.png')}/>
                                                <Text style={{fontSize:10}}>JAVA</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={()=>{
                                                this._navToCategory('PHP')
                                            }}
                                        >
                                            <View style={{alignItems:'center'}}>
                                                <Image
                                                    resizeMode='contain'
                                                    style={{width: WIDTH/8,height:WIDTH/8,marginVertical: 5}}
                                                    source={require('../../data/img/db.png')}/>
                                                <Text style={{fontSize:10}}>PHP</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <Text style={{marginTop:2,backgroundColor:'#fff',marginLeft: 15,fontSize:16,paddingVertical: 10,fontWeight: 'bold'}}>精选推荐</Text>
                                </View>


                            )
                        }}
                        contentContainerStyle={{alignSelf: 'center',paddingBottom: WIDTH / 3 * 2}}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={this.props.contentData}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => item.title+index}
                    />
                </View>
            </View>

        )
    }

    /**
     * 精品推荐列表item
     * @param item
     * @returns {*}
     * @private
     */
    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    this._navDetail(item)
                }}
            >
                <Image source={{uri: baseUrl+item.img}}
                       style={styles.img}
                       resizeMode='cover'
                />
                <View style={styles.textContainer}><Text
                    style={styles.title}>{item.title}</Text><Text
                    style={styles.author}>{item.author}</Text></View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
    },
    item: {
        margin: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#eee',
        alignSelf: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        elevation: 2,
        backgroundColor: '#ddd',
    },
    img: {
        width: WIDTH/2.2,
        height: WIDTH/4,
        alignSelf: 'center',
    },
    textContainer: {
        backgroundColor: '#fff',
        // marginVertical: 5
    },
    title: {
        color: '#2c2c2c',
        marginVertical: 5
    },
    author: {
        color: '#aeaeae',
        marginBottom: 5
    }
});

function mapStateToProps(state) {
    const {contentData, isFetching} = state.content;
    return {contentData, isFetching}
}

export default connect(mapStateToProps)(Home)
