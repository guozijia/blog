import request from './request'

export const login = async (username, password) => {
    const res = await request({
        method: 'POST',
        url: '/login',
        data: {
            username,
            password
        }
    })
    return res
}

export const getUserInfo = async () => {
    const res = await request({
        url: '/users/info',
    })
    return res
}

export const getUserUnread = async () => {
    const res = await request({
        url: '/users/unread'
    })
    return res
}

export const getUserLike = async () => {
    const res = await request({
        url: '/users/likes'
    })
    return res;
}

export const getWallpaper = async () => {
    const res = await request({
        url: '/wallpaper'
    })
    return res
}

export const register = async (username, password) => {
    const res = await request({
        method: 'POST',
        url: '/users',
        data: {
            username,
            password
        }
    })
    return res
}