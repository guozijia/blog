import { getNoteList } from '@/services/note'
import * as actionType from './constants'

export const changeNoteListAction = (res) => ({
    type: actionType.CHANGE_NOTE_LIST,
    noteList: res.data
})

export const getNoteListAction = (offset, size) => {
    return async dispatch => {
        const res = await getNoteList(offset, size)
        dispatch(changeNoteListAction(res))
    }
}