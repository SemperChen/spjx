import React, {Component} from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {requestContent} from '../actions/content';
import {activeTintColor} from "../constants/constants";
import {WIDTH} from "./Home";
import {Icon} from 'native-base';

const _remove = require('lodash/remove');
class Collect extends Component {

    componentDidMount() {
        this.props.dispatch(requestContent());
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
     * 通过id移除收藏视频
     * @param id
     * @private
     */
    _removeCollect = (id) => {
        _remove(AppConfig.collection,(item)=>{
            return item.id===id
        });
        this.forceUpdate()

    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={activeTintColor}
                    barStyle="light-content"
                />
                {AppConfig.collection.length>0?
                    <FlatList
                        contentContainerStyle={{alignSelf: 'center'}}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={AppConfig.collection}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => item.title + index}
                    />:
                    <Text style={{fontSize:20,margin:20}}>无收藏</Text>}

            </View>

        )
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    this._navDetail(item)
                }}
            >
                <Image source={{uri: item.img}}
                       style={styles.img}
                       resizeMode='cover'
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{item.author}</Text>
                    <Icon
                        onPress={()=>{
                            this._removeCollect(item.id)
                        }}
                        color={activeTintColor}
                        style={{color: '#ff5c8d', position: 'absolute', bottom: 4, right: 4}}
                        active name='heart'/>
                </View>

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
        width: WIDTH / 2.2,
        height: WIDTH / 4,
        alignSelf: 'center',
    },
    textContainer: {
        backgroundColor: '#fff',
        padding: 5
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

export default connect(mapStateToProps)(Collect)
