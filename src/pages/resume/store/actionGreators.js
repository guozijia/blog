import * as actionType from './constants'

export const changeMouseDownAction = mouseDown=>({
    type:actionType.CHANGE_SCROLL,
    mouseDown
})

export const getMouseDownAction = (mouseDown)=>{
    return dispatch =>{
        dispatch(changeMouseDownAction(mouseDown))
    }
} 