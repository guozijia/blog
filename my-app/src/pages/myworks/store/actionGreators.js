import { getMyworkList } from '@/services/mywork'
import * as actionType from './constants'

export const changeMyworkListAction = (res) => ({
    type: actionType.CHANGE_MYWORK_LIST,
    myworkList: res.data
})

export const getMyworkListAction = () => {
    return async dispatch => {
        const res = await getMyworkList()
        dispatch(changeMyworkListAction(res))
    }
}