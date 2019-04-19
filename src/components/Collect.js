import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {requestContent} from '../actions/content';
import ImageCarousel from "../commons/ImageCarousel";
import {activeTintColor, inactiveTintColor2} from "../constants/constants";
import {WIDTH} from "./Home";
import {Icon, Item} from 'native-base';

class Collect extends Component {

    componentDidMount() {
        this.props.dispatch(requestContent());
    }

    _navDetail = (item) => {
        this.props.navigation.navigate('Detail', {video: item})
    };

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={activeTintColor}
                    barStyle="light-content"
                />
                <FlatList

                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center',}}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={this.props.contentData
                        ?
                        globalLanguages === 'en' ? this.props.contentData.en : this.props.contentData.zh
                        :
                        null}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => item.title + index}
                />
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
                    <Icon  color={activeTintColor} style={{color:'#ff5c8d',position:'absolute',bottom:4,right:4}}  active name='heart' />

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
