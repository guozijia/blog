import React, { memo } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { NavLink } from 'react-router-dom';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'
import HYAvatar from './avatar/index'
// import HYPublish from '../app_publish/index'
import Logo from '@/assets/img/logo.svg'


import {
    getToken
} from '@/utils/setAuthToken'

const Header = memo((props) => {

    const showSelectItem = (item, index) => {
        return (
            <NavLink to={item.link}>
                {item.title}
            </NavLink>
        )
    }

    const token = getToken()

    return (
        <HeaderWrapper>
            <div className="content">
                <a href="#/" className="logo" style={{ textDecoration: "none" }}>
                    <img src={Logo} alt="" />
                    <h2>𝓐𝓻𝓻𝓲𝓿𝓪𝓵</h2>
                </a>
                <HeaderLeft>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="gucciFrom">
                        <Input prefix={<SearchOutlined />} className="search" placeholder="搜索您要查找的内容" />
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    {
                        token ? <HYAvatar className="avatar" /> : <NavLink to='/login' className="center">注册 / 登录</NavLink>
                    }
                </HeaderRight>
            </div>
        </HeaderWrapper>
    )
})

export default Header


