import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {requestContent} from '../actions/content';
import ImageCarousel from "../commons/ImageCarousel";
import {activeTintColor} from "../constants/constants";

export const WIDTH = Dimensions.get('window').width;

class Home extends Component {


    componentDidMount() {
        this.props.dispatch(requestContent());
    }

    _navDetail = (item) => {
        this.props.navigation.navigate('Detail', {poetry: item})
    };

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={activeTintColor}
                    barStyle="light-content"
                />
                <View style={{position: 'absolute',top:0}}>
                    <ImageCarousel/>

                </View>
                <View style={[styles.container,{paddingTop:WIDTH/3+20}]}>

                    <FlatList
                        contentContainerStyle={{justifyContent: 'center',alignItems: 'center',}}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={this.props.contentData
                            ?
                            globalLanguages === 'en' ? this.props.contentData.en : this.props.contentData.zh
                            :
                            null}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => item.title}
                    />
                </View>
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
                <View style={styles.textContainer}><Text
                    style={styles.title}>{item.title}</Text><Text
                    style={styles.author}>{item.author}</Text></View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    banner: {
        alignSelf: 'center',
        margin: 10,
        marginBottom: '10%'
    },
    item: {
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#eee',
        alignSelf: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        elevation: 2,
        backgroundColor: '#ddd'
    },
    img: {
        width: WIDTH/2-30,
        height: WIDTH/2-30,
        alignSelf: 'center'
    },
    textContainer: {
        padding: 10,
        backgroundColor: '#fff'
    },
    title: {
        color: '#2c2c2c',
        marginBottom: 3
    },
    author: {
        color: '#aeaeae'
    }
});

function mapStateToProps(state) {
    const {contentData, isFetching} = state.content;
    return {contentData, isFetching}
}

export default connect(mapStateToProps)(Home)
