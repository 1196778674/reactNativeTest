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
                tabBarIcon: (({ focused }) => {
                    return (
                        <View>
                            {
                                !focused ? (<Image style={styles.icon} source={require('../images/home.png')}/>) : (<Image style={styles.icon} source={require('../images/homeSelect.png')}/> )
                            }
                        </View>
                    )
                })
            }},
        Two: { screen: Two,
            navigationOptions:{
                tabBarLabel: '列表1',
                tabBarIcon: (({ focused }) => (
                    <View>
                        {
                            !focused ? (<Image style={styles.icon} source={require('../images/list.png')}/>) : (<Image style={styles.icon} source={require('../images/listSelect.png')}/> ) 
                        }
                    </View>
                ))
            }},
        Three: { screen: Three,
            navigationOptions:{
                tabBarLabel: '列表2',
                tabBarIcon: (({ focused }) => (
                    <View>
                        {
                            !focused ? (<Image style={styles.icon} source={require('../images/detail.png')}/>) : (<Image style={styles.icon} source={require('../images/detailSelect.png')}/> )
                        }
                    </View>
                ))
            }},
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
        shifting: false, // 启用tab切换动画
        barStyle: { backgroundColor: '#fff' },
    },
);

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    }
})