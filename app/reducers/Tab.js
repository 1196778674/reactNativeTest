import {CHANGE_TAB} from '../actions/actionType'
const initState = {
    tab: 1
}
const reducer = {
    [CHANGE_TAB](state, text){
        return {...state, tab: text}
    }
}
export default (state = initState, action) => {
    const {type, data} = action;
    if(reducer[type]){
        return reducer[type](state, data)
    } else {
        return state
    }
}
