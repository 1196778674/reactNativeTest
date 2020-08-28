import { ADD_TODO, SET_NAME } from './actionType'
export const addTodo = text => ({
    type: ADD_TODO,
    text
})

// thunk
export const thunkTodo = () => dispatch => {
    asyncGet(dispatch);
}
// 异步请求
const asyncGet = (dispatch) => {
    setTimeout(()=>{
        dispatch(setName('dispatch'))
    },2000)
}

export const setName = text => ({
    type: SET_NAME,
    text
})

