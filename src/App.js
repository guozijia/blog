import React, { memo } from 'react'
import { Provider } from 'react-redux'//共享store
import Router from './router/index'
import store from './store/index'


const APP = memo(function () {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    ) 
})

export default APP

   