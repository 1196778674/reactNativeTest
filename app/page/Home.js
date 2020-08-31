import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { StyleSheet, View, Image } from 'react-native'

import One from './Home/one'
import Two from './Home/two'
import Three from './Home/three'
import Four from './Home/four'


export default createMaterialBottomTabNavigator(
    {
        One: { screen: One,
            navigationOptions:{
                tabBarLabel: '首页',
                tabBarIcon: (() => (
                    <View>
                        <Image style={styles.icon} source={require('../images/home.png')}/> 
                    </View>
                ))
            }},
        Two: { screen: Two,
            navigationOptions:{
                tabBarLabel: '列表1',
                tabBarIcon: (() => (
                    <View>
                        <Image style={styles.icon} source={require('../images/list.png')}/> 
                    </View>
                ))
            }},
        Three: { screen: Three,
            navigationOptions:{
                tabBarLabel: '列表1',
                tabBarIcon: (() => (
                    <View>
                        <Image style={styles.icon} source={require('../images/detail.png')}/> 
                    </View>
                ))
            }},
        Four: { screen: Four,
            navigationOptions:{
                tabBarLabel: '我的',
                tabBarIcon: (() => (
                    <View>
                        <Image style={styles.icon} source={require('../images/my.png')}/> 
                    </View>
                )),
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    defaultHandler()
                    // 可做登录校验
                    console.log('\n\n------ begin: 登录校验 ------')
                    console.log('校验是否登录')
                    console.log('------ end: 登录校验 ------\n\n')
                }
            }},
    },
    {
        initialRouteName: 'One',
        activeColor: "#000",
        navigationOptions: {
            tabBarVisible: false,
        },
        barStyle: { backgroundColor: '#fff' },
    },
);

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    }
})