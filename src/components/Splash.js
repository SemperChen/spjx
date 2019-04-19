import React, {Component} from 'react';
import {StatusBar, Text, View, Dimensions} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import I18n from '../i18n/i18n';
import {getLanguages} from 'react-native-i18n';
import {loadAppConfig} from "../utils/ConfigUtil";

const HEIGHT = Dimensions.get('window').height;

class Splash extends Component {

    static navigationOptions = {
        header: null,
    };

    componentWillMount(hidden, animation) {
        StatusBar.setHidden(true, animation)
    }

    componentDidMount() {

        getLanguages().then(languages => {
            if (languages[0] === 'zh-CN' || languages[0] === 'zh-Hans-US' || languages[0] === 'zh-Hans-CN') {
                global.globalLanguages = 'zh'
            } else {
                global.globalLanguages = 'en'
            }
        });
        this.timer = setTimeout(() => {

            //加载配置
            loadAppConfig().then((config)=>{
                if(config||config.length>0){
                    global.AppConfig = config;
                    if(AppConfig.isLogin){
                        this.navHome()
                    }else {
                        this.navLogin()
                    }
                }
            });
        }, 2000)
    }

    componentWillUnmount(hidden, animation) {
        this.timer && clearTimeout(this.timer);
        StatusBar.setHidden(false, animation);
        // AdMobRewarded.removeAllListeners();
        // AdMobInterstitial.removeAllListeners();
    }

    navLogin = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
        });
        this.props.navigation.dispatch(resetAction);
    };

    navHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Tab'})],
        });
        this.props.navigation.dispatch(resetAction);
    };

    render() {
        return (
            <View style={{alignItems: 'center', flex: 1}}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 28,
                    marginTop: HEIGHT / 3,
                    backgroundColor: 'transparent'
                }}>{I18n.t('poetry')}</Text>
            </View>
        )
    }
}

export default Splash
