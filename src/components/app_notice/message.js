import React, { memo, forwardRef, useEffect, useState } from 'react'
import { Avatar, Empty } from 'antd';
import { MessageWrapper } from './style'
import { getUserUnread } from '@/services/login'
import moment from 'moment'
import 'moment/locale/zh-cn'

const HYMessage = forwardRef(
    (props, ref) => {
        const { uid } = props
        const [list, setList] = useState([])
        useEffect(() => {
            getUserUnread(uid).then(res => {
                setList(res.data)
            })
        }, [uid])
        return (
            <MessageWrapper ref={ref}>
                <h3>通知</h3>
                <div className="noticeContent">
                    {list.length ?
                        list.map((item, index) => {
                            return (
                                <div className="noticeCard" key={index}>
                                    <div className="card">
                                        <Avatar src={item.userinfo.avatar} />
                                        <div className="card_right">
                                            <h4>
                                                {item.userinfo.name}
                                                &emsp;{moment(item.time).startOf().fromNow()}
                                            </h4>
                                            <h4>
                                                {item.comment ? "评论了" : "赞了你"}：
                                                <span className="moment">
                                                    {item.moment}
                                                </span>&emsp;
                                                {item.comment ? item.comment : null}
                                            </h4>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                        ) : <Empty style={{padding:"20px 0"}}/>
                    }
                </div>
                <a href="#/">查看全部>></a>
            </MessageWrapper>
        )
    })

export default memo(HYMessage)
