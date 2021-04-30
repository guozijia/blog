import request from './request'

export const getHotnews = async () => {
    const res = await request({
        url: '/hot',
    })
    return res
}

export const getResumePdf = async ()=>{
    const res = await request({
        url:'/download'
    })
    return res
}
