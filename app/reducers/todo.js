import {ADD_TODO, SET_NAME} from '../actions/actionType'
const initState = {
    test: 1,
    geturl: '点击得到链接'
}

const reducer = {
    [ADD_TODO](state, text){
        return {...state, test: state.test + text}
    },
    [SET_NAME](state, text){
        return {...state, geturl: text}
    }
}
export default (state = initState, action) => {
    const {type, text} = action;
    if(reducer[type]){
        return reducer[type](state, text)
    } else {
        return state
    }
}
