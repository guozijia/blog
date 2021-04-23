import * as actionType from './constants'
import { Map } from 'immutable'

const defaultState = Map({
    myworkList: {},
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_MYWORK_LIST:
            return state.set("myworkList", action.myworkList)
        default:
            return state
    }
}

export {
    reducer
}