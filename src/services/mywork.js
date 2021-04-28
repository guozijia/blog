import request from './request'

export const getMyworkList = async () => {
    const res = request({
        url: '/myworks'
    })
    return res;
}

export const uploadCover = async (workId, formData) => {
    const res = request({
        url: '/upload/cover',
        method: "POST",
        params: {
            workId
        },
        data: formData
    })
    return res
}

export const uploadPic = async (workId, formData) => {
    const res = request({
        url: '/upload/workPic',
        method: "POST",
        params: {
            workId
        },
        data: formData
    })
    return res
}

export const uploadText = async (title, content, type) => {
    const res = request({
        url: '/mywork',
        method: "POST",
        data: {
            title,
            content,
            type
        }
    })
    return res
}

export const getWorkDeatil = async (workId) => {
    const res = request({
        url: '/mywork/detail',
        method: "POST",
        params: {
            workId
        }
    })
    return res;
}