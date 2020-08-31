import { combineReducers } from 'redux'
import todo from './todo'
import Tab from './Tab'
const reducer = {
    todo,
    Tab
}

export default combineReducers({
    ...reducer
})