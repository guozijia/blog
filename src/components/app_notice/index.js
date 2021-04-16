import React, { memo, useEffect, useState, useRef } from 'react'
import { Button, Badge } from 'antd';
import { MailFilled } from '@ant-design/icons'
import Websocket from 'react-websocket'
import { CSSTransition } from 'react-transition-group'
import { NoticeWrapper } from './style'
import HYMessage from './message'

export default memo(function HYNotice (props) {
    const [count, setCount] = useState(0)
    const [showMessage, setShowMessage] = useState(false)
    const ref = useRef()

    useEffect(() => {
        document.addEventListener('click', documentClick)
    })

    const { userInfo } = props
    // const ws = new WebSocket(`ws://localhost:8000/notice/${userInfo.id}`)
    // if (userInfo.id) {
    //     ws.onopen = () => {
    //         console.log("WebSocket已连接~")
    //     }
    //     ws.onmessage = e => {
    //         // receiveMsg(e)
    //         console.log(e.data)
    //     }
    //     ws.onclose = function () {
    //         console.log("websocket已关闭~")
    //     }
    // }
    const handelNocite = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        setShowMessage(true)
    }

    const handelNociteCount = (data) => {
        const res = JSON.parse(data)
        setCount(res)
    }

    const documentClick = (e) => {
        if (e.target === ref.current) return
        setShowMessage(false)
    }
    return (
        <NoticeWrapper>
            {
                userInfo.id ? <Websocket
                    url={`ws://${process.env.NODE_ENV === 'development' ? 'localhost:8000' : '112.74.38.199:8000'}/notice/${userInfo.id}`}
                    onMessage={handelNociteCount}
                /> : null
            }

            <Badge count={count} className="message" size="small">
                <Button
                    type="text"
                    icon={<MailFilled />}
                    onClick={e => handelNocite(e)}
                    style={{ color:"#666"}}
                />
            </Badge>
            <CSSTransition
                in={showMessage}
                classNames="message"
                timeout={300}
                unmountOnExit={true}
                appear>
                {/* <div className="message" ref={ref}>
                    未读消息
                </div> */}
                <HYMessage ref={ref} uid={userInfo.id} />
            </CSSTransition>
        </NoticeWrapper>
    )
})
