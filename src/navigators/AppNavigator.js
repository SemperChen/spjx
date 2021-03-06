import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import {Animated, Easing, TouchableOpacity} from 'react-native';
import Home from '../components/Home';
import Splash from '../components/Splash';
import Reader from '../components/Reader';
import Explore from '../components/Explore';
import Detail from '../components/Detail';
import Me from '../components/My';
import {activeTintColor, appName, iconSize, inactiveTintColor, inactiveTintColor2} from "../constants/constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Login from "../components/Login";
import Feedback from "../components/Feedback";
import Search from "../components/Search";
import Collect from "../components/Collect";
import Category from "../components/Category";
import User from "../components/User";

/**
 * 首页Tab
 */

//BottomTabNavigator作为根控制器控制四个StackNavigator
const TabContainer = createBottomTabNavigator(
    {
        Home: {
            screen: Home, navigationOptions: {
                tabBarLabel: '主页',
                tabBarIcon: ({focused}) => (
                    <MaterialIcons name="home" size={iconSize}
                                   style={focused ?
                                       {color: activeTintColor} :
                                       {color: inactiveTintColor2}}/>
                ),
            }
        },
        Explore: {
            screen: Explore, navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({focused}) => (
                    <MaterialIcons name="explore" size={iconSize}
                                   style={focused ?
                                       {color: activeTintColor} :
                                       {color: inactiveTintColor2}}/>
                ),
            }
        },
        Me: {
            screen: Me, navigationOptions: {
                tabBarLabel:'我的',
                tabBarIcon: ({focused}) => (
                    <MaterialIcons name="person" size={iconSize}
                                   style={focused ?
                                       {color: activeTintColor} :
                                       {color: inactiveTintColor2}}/>
                ),
            }
        }
    },
    {
        animationEnabled: false, //没有动画
        swipeEnabled: false, // 禁止滑动
        lazy: true, //只加载当前界面 提高性能
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: activeTintColor,
            inactiveTintColor: inactiveTintColor2,
            showIcon: true,
            showLabel: true,
            labelStyle: {
                marginTop: 0,
                fontSize: 10,
            },
            style: {
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                opacity: 0,
            },
            iconStyle: {},
            tabStyle: {
                height: 48,
                margin: 0,
                padding: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
);

/**
 * 路由配置中心
 */
const AppNavigator = createStackNavigator({
    Splash: {screen: Splash},
    Feedback:{screen: Feedback,navigationOptions: {headerTitle: '意见反馈', headerTintColor: '#fff'}},
    Tab: {screen: TabContainer, navigationOptions: ({navigation, screenProps}) => ({
            headerRight: (
                <TouchableOpacity
                    style={{padding: 10}}
                    onPress={() => {
                        navigation.navigate('Search')
                    }}>
                    <MaterialIcons name="search" size={28} style={{color: '#fff'}}/>
                </TouchableOpacity>
            ),
            headerTitle: appName,
            headerTintColor: '#fff'
        })},

    Reader: {screen: Reader},
    Collect: {screen: Collect,navigationOptions: {headerTitle: '我的收藏', headerTintColor: '#fff'}},

    Login: {screen: Login, navigationOptions: {headerTitle: appName, headerTintColor: '#fff'}},
    Search: {screen: Search, navigationOptions: {headerTitle: appName, headerTintColor: '#fff'}},
    Category: {screen: Category, navigationOptions: {headerTitle: appName, headerTintColor: '#fff'}},
    User: {screen: User, navigationOptions: {headerTitle: '个人中心', headerTintColor: '#fff'}},

    Detail: {screen: Detail},
}, {
    initialRouteName: 'Splash',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
        headerStyle: {
            backgroundColor: inactiveTintColor,
            elevation: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
    cardStyle: {
        backgroundColor: '#fafafa',
    },

    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateX}]};
        },
    }),
});

export default AppNavigator;





