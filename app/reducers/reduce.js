import { CHANGE_STEP } from '../actions/actionType'
const initState = {
    step: 1
}
const reducer = {
    [CHANGE_STEP](state, text){
        return {...state, step: text}
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
