import * as actionType from './constants'

import {
    getUserInfo,
    getWallpaper,
    getUserLike
} from '@/services/login'

import { removeToken } from '@/utils/setAuthToken'

export const changeUserInfoAction = userInfo => ({
    type: actionType.CHANGE_USERINFO,
    userInfo
})
export const changeWallpaperAction = wallpaper => ({
    type: actionType.CHANGE_WALLPAPER,
    wallpaper
})
export const changeUserLikeAction = userlikes => ({
    type: actionType.CHANGE_USER_LIKES,
    userlikes
})



export const getUserInfoAction = (username, password) => {
    return async dispatch => {
        try {
            const userInfo = await getUserInfo()
            dispatch(changeUserInfoAction(userInfo.data))
        } catch (error) {
            removeToken()
            console.log(error);
        }
    }
}

export const logoutAction = () => {
    return dispatch => {
        dispatch(changeUserInfoAction({}))
    }
}

export const getWallpaperAction = () => {
    return async dispatch => {
        const wallpaper = await getWallpaper()
        dispatch(changeWallpaperAction(wallpaper.data))
    }
}

export const getUserLikeAction = () => {
    return async dispatch => {
        const res = await getUserLike()
        dispatch(changeUserLikeAction(res.data))
    }
}
