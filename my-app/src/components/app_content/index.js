import React, { memo } from 'react'
import { Redirect, Route } from "react-router-dom";
import { getToken } from '@/utils/setAuthToken'
import routeMap from '../../router/routeMap'

const Content = memo((props) => {

    const { pathname } = props;

    const targetRouterConfig = routeMap.find(
        (item) => item.path === pathname
    );

    const token = getToken()

    // console.log("我被调用了")

    if (targetRouterConfig && !targetRouterConfig.auth && !token) {
        const { component } = targetRouterConfig;
        return <Route exact key={pathname} path={pathname} component={component} />;
    }

    if (token) {
        if (pathname === "/login") {
            return <Redirect to='/' />
        } else {
            if (targetRouterConfig) {
                return <Route path={pathname} key={pathname} component={targetRouterConfig.component} />
            }
            else {
                return <Redirect to="/404" />
            }
        }
    } else {
        if (targetRouterConfig && targetRouterConfig.auth) {
            return <Redirect to="/login" />
        } else {
            return <Redirect to="/404" />
        }
    }
})


export default Content