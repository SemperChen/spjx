/**
 * @author Semper
 */
import React from "react";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Carousel from "./carousel/Carousel";
import {connect} from "react-redux";
import {WIDTH} from "../components/Home";
import {requestSpread} from "../actions/spread";
import {inactiveTintColor} from "../constants/constants";

class ImageCarousel extends React.Component {


    constructor() {
        super();
        this.data = [];
    }

    componentDidMount(){
        this.props.dispatch(requestSpread('http://www.zhuishushenqi.com/spread'));

    }

    render() {
        if (this.props.spreadData) {
            this.spreadData = this.props.spreadData;
            this.data = this.spreadData.data;
            // console.log('ImageCarousel spreadData', this.spreadData)
        }
        return (
            this.props.spreadData ?
                <View style={styles.container}>
                    <Carousel renderItem={this._renderItem} data={this.data} showPagination={true}
                              selectedDotColor={inactiveTintColor}
                              unSelectedDotColor='#ddd'/>
                </View> : <Text style={{alignSelf: 'center'}}>下拉刷新</Text>
        )
    }

    _renderItem = ({item,index}) => {
        return (
            <TouchableHighlight
                onPress={() => {
                    // this.props.navToDetail(item.link)
                }}
                style={styles.item}
                underlayColor='#fff'
            >
                <Image resizeMode='cover' source={{uri: item.img}}
                       style={{width: WIDTH, height: WIDTH / 3}}/>
            </TouchableHighlight>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: -2
    },
    cardContent: {
        // margin: IMG_MARGIN,
    },
    item: {
        marginTop: -2,
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH
    }
});

function mapStateToProps(state) {
    const {spreadData} = state.spread;
    return {spreadData}
}

export default connect(mapStateToProps)(ImageCarousel)
