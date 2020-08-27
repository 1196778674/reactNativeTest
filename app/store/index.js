import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer'

const Store = state => {
    return createStore (
        rootReducer,
        state
    )
}

const store = Store()

export default store;