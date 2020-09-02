import { combineReducers } from 'redux'
import todo from './todo'
import Tab from './Tab'
import Reduce from './reduce';
const reducer = {
    todo,
    Tab,
    Reduce
}

export default combineReducers({
    ...reducer
})