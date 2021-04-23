import { getMomentList } from '@/services/moment'
import * as actionType from './constants'

export const changeMomentListAction = (res) => ({
    type: actionType.CHANGE_MOMENT_LIST,
    momentList: res.data
})

export const getMomentListAction = (offset, size) => {
    return async dispatch => {
        const res = await getMomentList(offset, size)
        dispatch(changeMomentListAction(res))
    }
}