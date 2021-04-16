import request from './request'

export const getMomentList = async (offset, size) => {
    const res = await request({
        url: '/moment',
        params: {
            offset,
            size
        }
    })
    return res
}

export const createMoment = async (content) => {
    const res = await request({
        method: 'POST',
        url: '/moment',
        data: {
            content
        }
    })
    return res;
}

export const uploadMomentPic = async (momentId, formData) => { //动态图片
    const res = await request({
        method: 'POST',
        url: '/upload/pic',
        params: {
            momentId
        },
        data: formData
    })
    return res
}

export const uploadAvatar = async (formData) => { //上传头像
    const res = await request({
        method: 'POST',
        url: '/upload/avatar',
        data: formData
    })
    return res
}

export const likeMoment = async (momentId, userId) => {
    const res = await request({
        url: `/moment/like/${momentId}`,
        params:{
            userId
        }
    })
    return res;
}

export const getCommentList = async (momentId) => {
    const res = await request({
        url: '/comment',
        params: {
            momentId
        }
    })
    return res;
}

export const commentevent = async (momentId,content,author) => {
    const res = await request({
        method:'POST',
        url:'/comment',
        data:{
            momentId,
            content,
            author
        }
    })
    return res;
}