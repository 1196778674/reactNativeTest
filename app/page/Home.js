import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { StyleSheet, View, Image } from 'react-native'

import Index from './Home/ceshi'
import Two from './Home/online'
// import Three from './Home/three'
import Four from './Home/four'


export default createMaterialBottomTabNavigator(
    {
        One: { screen: Two,
            navigationOptions:{
                tabBarLabel: '线上环境',
                tabBarIcon: (({ focused }) => {
                    return (
                        <View>
                            {
                                !focused ? (<Image style={styles.icon} source={require('../images/home.png')}/>) : (<Image style={styles.icon} source={require('../images/homeSelect.png')}/> )
                            }
                        </View>
                    )
                }),
                tabBarOnPress: ({ navigation }) => {
                    window.changeStepOn(1)
                    navigation.navigate('One')
                }
            }},
        Two: { screen: Index,
            navigationOptions:{
                tabBarLabel: '测试环境',
                tabBarIcon: (({ focused }) => (
                    <View>
                        {
                            !focused ? (<Image style={styles.icon} source={require('../images/detail.png')}/>) : (<Image style={styles.icon} source={require('../images/detailSelect.png')}/> ) 
                        }
                    </View>
                )),
                tabBarOnPress: ({ navigation }) => {
                    window.changeStep(1)
                    navigation.navigate('Two')
                }
            }},
        // Three: { screen: Three,
        //     navigationOptions:{
        //         tabBarLabel: '列表2',
        //         tabBarIcon: (({ focused }) => (
        //             <View>
        //                 {
        //                     !focused ? (<Image style={styles.icon} source={require('../images/detail.png')}/>) : (<Image style={styles.icon} source={require('../images/detailSelect.png')}/> )
        //                 }
        //             </View>
        //         ))
        //     }},
        Four: { screen: Four,
            navigationOptions:{
                tabBarLabel: '我的',
                tabBarIcon: (({ focused }) => (
                    <View>
                        {
                            !focused ? (<Image style={styles.icon} source={require('../images/my.png')}/>) : (<Image style={styles.icon} source={require('../images/mySelect.png')}/> )
                        }
                    </View>
                )),
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    if(true) {
                        navigation.navigate("Login")
                    } else {
                        defaultHandler()
                    }
                }
            }},
    },
    {
        initialRouteName: 'One',
        activeColor: "#007aff",
        shifting: false, 
        barStyle: { backgroundColor: '#fff' },
    },
);

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    }
})