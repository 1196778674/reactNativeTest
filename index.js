import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import { Provider as AntProvider } from '@ant-design/react-native'
import store from './app/store'

// router
import Router from './app/Router';

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <AntProvider>
                    <Router />
                </AntProvider>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Index);
