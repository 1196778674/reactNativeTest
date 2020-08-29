import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Todo from './app/Todo';
import Home from './app/Home'
import { Provider } from 'react-redux'
import { Provider as AntProvider } from '@ant-design/react-native'
import store from './app/store'

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <AntProvider>
                    <Home />
                </AntProvider>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Index);
