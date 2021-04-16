import { combineReducers } from 'redux-immutable'

import { reducer as loginReducer } from '../pages/login/store/index'
import { reducer as discoverReducer } from '../pages/discover/store/index'
import { reducer as myworkReducer } from '../pages/myworks/store/index'

const reducer = combineReducers({
    login: loginReducer,
    moment: discoverReducer,
    mywork: myworkReducer
})

export default reducer

