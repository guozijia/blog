//import React from 'react'

// const HYDiscover = React.lazy(() => import('@/pages/discover'))
// const HYError = React.lazy(() => import('@/pages/404'))
// const HYMyworks = React.lazy(() => import('@/pages/myworks'))
// const HYResume = React.lazy(() => import('@/pages/resume'))
//const HYLogin = React.lazy(() => import('@/pages/login'))

// react.lazy 与动画库有冲突？

import HYDiscover from  '@/pages/discover'
import HYError from '@/pages/404'
import HYMyworks from '@/pages/myworks'
import HYResume from '@/pages/resume'
import HYProfile from '@/pages/profile'
import HYBlog from '@/pages/blog'
// import HYDemo from '@/pages/demo'


const routerMap = [
    { path: "/discover", component: HYDiscover, auth: false },
    { path: "/myworks", component: HYMyworks, auth: false },
    { path: "/blog", component: HYBlog, auth: false },
    { path: "/resume", component: HYResume, auth: true },
    { path: "/profile", component: HYProfile, auth: true },
    { path: "/404", component: HYError },
    //{ path: "/login", component: HYLogin },
];

export default routerMap
