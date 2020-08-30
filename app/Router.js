import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './Home'
import Todo from './Todo'
import Login from './page/Login';

const router = createStackNavigator({
    Todo: {screen: Todo},
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
        })
    },
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
        })
    }
},
{
    initialRouteName: 'Home'
});

const Router = createAppContainer(router)

export default Router