import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { Form, Input, Button, Checkbox, message } from 'antd';
import {
    login
} from '@/services/login'

import { getWallpaperAction } from './store/actionGreators'

import {
    setToken
} from '@/utils/setAuthToken'
import { LoginWrapper } from './style'

//import logo from '@/assets/img/logo.svg'

export default memo(function HYLogin (props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWallpaperAction())
    }, [dispatch])

    const { wallpaper } = useSelector(state => ({
        wallpaper: state.getIn(['login', 'wallpaper'])
    }), shallowEqual)

    const  url  = wallpaper.data ? wallpaper.data[0].url: ''
    const copyright = wallpaper.data ? wallpaper.data[0].copyright : ''

    const onFinish = async (values) => {
        const { username, password } = values
        try {
            const res = await login(username, password)
            const { token } = res.data
            setToken(token)
            props.history.push('/')
        } catch (error) {
            message.warning(error.response.data);
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <LoginWrapper url={url}>
            <div className="loginFrom">
                <div className="login">
                    <div className="login_top">
                        <div className="login-top-title">
                            {/* <img src={logo} alt="" /> */}
                            <h3>Discover the world’s Creatives</h3>
                        </div>
                    </div>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        size='middle'
                        style={{ padding: "18px" }}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}

                        >
                            <Input placeholder="账号" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="密码" />
                        </Form.Item>

                        <Form.Item >
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住我</Checkbox>
                                </Form.Item>
                                <NavLink to="/register">
                                    注册账号
                                </NavLink>
                            </div>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="footer">
                <span>{'By  bing    '+copyright}</span>
            </div>
        </LoginWrapper>
    )
})
