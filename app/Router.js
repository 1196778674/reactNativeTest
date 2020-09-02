import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack'

import Home from './page/Home'
import Todo from './Todo'
import Login from './page/Login';
import List from './page/Home/list';

const router = createStackNavigator({
    Todo: {screen: Todo},
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
        })
    },
    List: {
        screen: List,
        navigationOptions: ({navigation}) => ({
            headerShown: true,
            // ...TransitionPresets.SlideFromRightIOS,
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
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        ...TransitionPresets.DefaultTransition,
    }
});

const Router = createAppContainer(router)

export default Router