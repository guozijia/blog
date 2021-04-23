import React, { memo } from 'react'
import { Form , Input, Button, message } from 'antd';
import {
    register,
} from '@/services/login'
import { NavLink } from 'react-router-dom'
import { LoginWrapper } from './style'

//import logo from '@/assets/img/logo.svg'

export default memo(function HYLogin (props) {


    const onFinish = async (values: any) => {
        const { username, password } = values
        try {
            const res = await register(username, password)
            console.log(res)
            message.success('注册成功~', 10)
            setTimeout(()=>{
                props.history.push('login')
            },1000)
        } catch (error) {
            message.warning(error.response.data);
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    

    return (
        <LoginWrapper>
            <div className="loginFrom">
                <div className="login">

                    <h1>注册你的账号</h1>

                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        size='middle'
                        style={{padding:"18px"}}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            
                        >
                            <Input placeholder="账号"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="密码"/>
                        </Form.Item>


                        <Form.Item >
                            <Button type="primary" htmlType="submit" block>
                                注册
                        </Button>
                        </Form.Item>
                        <Form.Item >
                            <div style={{
                                display: "flex",
                                justifyContent: 'center'
                            }}>
                                <NavLink to="/login">
                                    返回登录
                                </NavLink>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </LoginWrapper>
    )
})
