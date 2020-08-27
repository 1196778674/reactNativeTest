import { combineReducers } from 'redux'
import { ADD } from '../action/actionType'

const initalState = {
    count: 0
}

function reducer (state = initalState, action) {
    switch (action.type) {
        case 'ADD':
            return {...state, count: state.count + 1}
            break;
        default:
            return state
            break;
    }
}

export default combineReducers({
    reducer
})