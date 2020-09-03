import { CHANGE_STEP, CHANGE_STEP_ON } from '../actions/actionType'
const initState = {
    step: 1,
    stepOn: 1
}
const reducer = {
    [CHANGE_STEP](state, text){
        return {...state, step: text}
    },
    [CHANGE_STEP_ON](state, text){
        return {...state, stepOn: text}
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
