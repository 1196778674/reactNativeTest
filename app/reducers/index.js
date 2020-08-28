import { combineReducers } from 'redux'
import todo from './todo'
const reducer = {
    todo
}

export default combineReducers({
    ...reducer
})