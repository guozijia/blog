import * as actionType from './constants'
import { Map } from 'immutable'

const defaultState = Map({
    userInfo: {},
    wallpaper: {},
    userlikes: [],
    isLogin: false
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_USERINFO:
            return state.set("userInfo", action.userInfo)
        case actionType.CHANGE_WALLPAPER:
            return state.set("wallpaper", action.wallpaper)
        case actionType.CHANGE_USER_LIKES:
            return state.set("userlikes", action.userlikes)
        case actionType.CHANGE_IS_LOGIN:
            return state.set("isLogin", action.isLogin)
        default:
            return state
    }
}

export {
    reducer
}