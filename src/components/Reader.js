import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {WIDTH} from "./Home";
import Pdf from "react-native-pdf";
import ToastUtil from "../utils/ToastUtil";

class Reader extends Component {

    render() {
        const source = {uri:'https://github.com/SemperChen/spjx/raw/master/data/javascript-promise-book.pdf',cache:true};
        // let source = require('../../data/javascript-promise-book.pdf');  // ios only

        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        ToastUtil.showShort("加载失败")
                    }}
                    style={styles.pdf}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:WIDTH
    }
});

export default Reader
