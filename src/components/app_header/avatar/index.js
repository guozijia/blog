import React, { memo, useCallback, useEffect } from 'react'
import { Avatar, Dropdown, Menu } from 'antd';
import { withRouter,NavLink } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { AvatarWrapper } from './style'
import { useDispatch } from 'react-redux';
import HYNotice from '@/components/app_notice'
import { getUserInfoAction, logoutAction } from '@/pages/login/store/actionGreators'

export default withRouter(
    memo(function HYAvatar (props) {

        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(getUserInfoAction())
        }, [dispatch])
        const { userInfo } = useSelector(state => ({
            userInfo: state.getIn(["login", "userInfo"]),
        }), shallowEqual)
        const logout = useCallback(() => {
            props.history.push('/')
            dispatch(logoutAction())
        }, [dispatch, props])
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <NavLink to="/profile">个人中心</NavLink>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href=" ">设置</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" onClick={e => logout()}>退出登录</Menu.Item>
            </Menu>
        );

        return (
            <AvatarWrapper>
                <HYNotice userInfo={userInfo} />
                <Dropdown className="avatar" overlay={menu} trigger={['click']}>
                    <Avatar src={userInfo.avatarUrl} />
                </Dropdown>
            </AvatarWrapper>
        )
    })

)