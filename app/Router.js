import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './Home'
import Todo from './Todo'

const router = createStackNavigator({
        Todo: {screen: Todo},
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                headerShown: false,
            })
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen'
    });

const Router = createAppContainer(router)

export default Router