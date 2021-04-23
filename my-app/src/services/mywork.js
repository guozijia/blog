import request from './request'

export const getMyworkList = async () => {
    const res = request({
        url: '/mywork'
    })
    return res;
}