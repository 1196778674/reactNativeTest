import { ADD_LIST, REMOVE_LIST, RESET_LIST } from './actionType'
export const addList = data => ({
    type: ADD_LIST,
    data
})
export const removeList = data => ({
    type: REMOVE_LIST,
    data
})
export const resetList = () => dispatch => {
    setTimeout(() => {
        dispatch(resetListFun([]))
    }, 2000);
}
const resetListFun = data => ({
    type: RESET_LIST,
    data
})

