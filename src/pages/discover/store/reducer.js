import * as actionType from './constants'
import { Map } from 'immutable'

const defaultState = Map({
    momentList: [],
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_MOMENT_LIST:
            return state.set("momentList", action.momentList)
        default:
            return state
    }
}

export {
    reducer
}