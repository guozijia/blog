import * as actionType from './constants'
import { Map } from 'immutable'

const defaultState = Map({
    mouseDown: false
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_SCROLL:
            return state.set("mouseDown", action.mouseDown)
        default:
            return state
    }
}

export {
    reducer
}