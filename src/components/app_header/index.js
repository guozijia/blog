import React, { memo, useState, useEffect } from 'react'
import { SearchOutlined, MenuOutlined, GithubOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import { NavLink } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'
import HYAvatar from './avatar/index'
// import HYPublish from '../app_publish/index'
import Logo from '@/assets/img/logo.svg'


import {
    getToken
} from '@/utils/setAuthToken'

const Header = memo((props) => {

    const [isNav, setIsNav] = useState(false)

    const { mouseDown } = useSelector(state => ({
        mouseDown: state.getIn(["mouse", "mouseDown"])
    }), shallowEqual)

    useEffect(() => {
        document.addEventListener('click', documentClick)
    })

    const documentClick = () => {
        setIsNav(false)
    }

    const showSelectItem = (item, index) => {
        return (
            <NavLink to={item.link}>
                {item.title}
            </NavLink>
        )
    }

    const showNavHandle = (e)=>{
        e.nativeEvent.stopImmediatePropagation();
        setIsNav(true)
    }

    const token = getToken()

    return (
        <HeaderWrapper mouseDown={mouseDown}>
            <div className="content">
                <a href="#/" className="logo" style={{ textDecoration: "none" }}>
                    <img src={Logo} alt="" />
                    <h2>𝓐𝓻𝓻𝓲𝓿𝓪𝓵</h2>
                </a>
                <div className="main-nav">
                    <Button onClick={e => showNavHandle(e)} type="text" icon={<MenuOutlined />}></Button>
                </div>
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
                    <a title="项目地址" href="https://github.com/guozijia/gucci" target="view_window"><GithubOutlined style={{fontSize:"20px"}}/></a>
                    {
                        token ? <HYAvatar className="avatar" /> : <NavLink to='/login' className="center">注册 / 登录</NavLink>
                    }
                </HeaderRight>
            </div>
            <CSSTransition
                in={isNav}
                classNames="nav"
                timeout={400}
                unmountOnExit={true}
                appear>
                <div className="nav-list">
                    {
                        headerLinks.map((item, index) => {
                            return (
                                <div key={item.title} className="nav-item">
                                    {showSelectItem(item, index)}
                                </div>
                            )
                        })
                    }
                </div>
            </CSSTransition>

        </HeaderWrapper>
    )
})

export default Header


