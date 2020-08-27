import { Provider } from 'react-redux'
import React, { Component } from 'react'
import Index from './index'
import store from './app/store'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        )
    }
}