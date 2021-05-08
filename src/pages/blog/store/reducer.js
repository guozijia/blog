import * as actionType from './constants'
import { Map } from 'immutable'

const defaultState = Map({
    noteList: [],
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_NOTE_LIST:
            return state.set("noteList", action.noteList)
        default:
            return state
    }
}

export {
    reducer
}