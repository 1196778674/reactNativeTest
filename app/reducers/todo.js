import {ADD_LIST, REMOVE_LIST, RESET_LIST} from '../actions/actionType'
const initState = {
    list: Array(0).fill({})
}
const reducer = {
    [ADD_LIST](state, lists){
        return {...state, list: lists}
    },
    [REMOVE_LIST](state, text){
        return {...state, list: text}
    },
    [RESET_LIST](state, text){
        return {...state, list: text}
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
