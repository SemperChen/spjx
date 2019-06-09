import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {WIDTH} from "./Home";
import Pdf from "react-native-pdf";
import ToastUtil from "../utils/ToastUtil";

class Reader extends Component {

    render() {
        const source = {uri:'https://github.com/SemperChen/spjx/raw/master/data/javascript-promise-book.pdf',cache:true};

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    style={styles.pdf}/>
            </View>
        )
    }
}
//pdf插件

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
