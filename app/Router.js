import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack'

import Home from './page/Home'
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
            ...TransitionPresets.ModalSlideFromBottomIOS,
        })
    }
},
{
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        ...TransitionPresets.DefaultTransition,
    }
});

const Router = createAppContainer(router)

export default Router