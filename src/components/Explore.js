import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {requestContent} from '../actions/content';
import ImageCarousel from "../commons/ImageCarousel";
import {activeTintColor} from "../constants/constants";
import {WIDTH} from "./Home";
import Icon from 'react-native-vector-icons/FontAwesome';

class Explore extends Component {



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
                <View style={{

                }}>

                    <FlatList
                        contentContainerStyle={{justifyContent: 'center',alignItems: 'center',}}
                        showsVerticalScrollIndicator={false}
                        data={this.props.contentData
                            ?
                            globalLanguages === 'en' ? this.props.contentData.en : this.props.contentData.zh
                            :
                            null}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => item.title+index}
                    />
                </View>
            </View>
        )
    }

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
                    <Text style={{color:'#ccc',fontSize:12,margin:5}} numberOfLines={2}>{item.intro}</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin:5,
                    }}>
                        <Text style={{color:'#ccc',fontSize:12}}>精品 | </Text>
                        <Icon color={'#ccc'} name={'eye'} size={12}/>
                        <Text style={{color:'#ccc',fontSize:12}}>  {item.viewersCount}</Text>
                    </View>

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

const styles = StyleSheet.create({
    container: {
        // margin: 10,
    },
    item: {
        // margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#eee',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        elevation: 2,
        backgroundColor: '#ddd',
        flexDirection: 'row'
    },
    img: {
        width: WIDTH/4,
        height: WIDTH/4,
    }
});

function mapStateToProps(state) {
    const {contentData, isFetching} = state.content;
    return {contentData, isFetching}
}

export default connect(mapStateToProps)(Explore)
