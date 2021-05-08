import request from './request'

export const createNote = async (data) => {
    const res = await request({
        url: '/note/create',
        method: "POST",
        data
    })
    return res
}

export const getNoteList = async (offset, size) => {
    const res = await request({
        url: '/note',
        params: {
            offset,
            size
        }
    })
    return res
}


