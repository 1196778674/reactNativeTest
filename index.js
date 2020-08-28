import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import { Provider } from 'react-redux'
import store from './app/store'

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Index);
