import React from 'react'

// react.lazy 与动画库有冲突？

const HYDiscover = React.lazy(() => import('@/pages/discover'))
const HYError = React.lazy(() => import('@/pages/404'))
const HYMyworks = React.lazy(() => import('@/pages/myworks'))
const HYResume = React.lazy(() => import('@/pages/resume'))
const HYProfile = React.lazy(() => import('@/pages/profile'))
const HYBlog = React.lazy(() => import('@/pages/blog'))

// import HYDiscover from  '@/pages/discover'
// import HYError from '@/pages/404'
// import HYMyworks from '@/pages/myworks'
// import HYResume from '@/pages/resume'
// import HYProfile from '@/pages/profile'
// import HYBlog from '@/pages/blog'
// import HYDemo from '@/pages/demo'


const routerMap = [
    { path: "/discover", component: HYDiscover, auth: false },
    { path: "/myworks", component: HYMyworks, auth: false },
    { path: "/note", component: HYBlog, auth: false },
    { path: "/resume", component: HYResume, auth: false },
    { path: "/profile", component: HYProfile, auth: true },
    { path: "/404", component: HYError },
    //{ path: "/login", component: HYLogin },
];

export default routerMap
