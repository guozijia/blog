import React, { memo, useEffect, useState } from 'react'
import { Button } from 'antd'
import { LikeOutlined, LikeFilled, MessageOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { likeMoment } from '@/services/moment'
import HYComment from '@/components/app_comment'
import { LikeWrapper } from './style'
import {
    getToken
} from '@/utils/setAuthToken'

export default withRouter(memo(function HYLike (props) {
    const { islike, count, comment, userId } = props
    const [like, setIslike] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [likecount, setLikecount] = useState(null)
    const token = getToken()
    useEffect(() => {
        setIslike(islike)
        setLikecount(count)
    }, [islike, count])
    const handelLike = async (status) => {
        if (!token) {
            props.history.push('/login')
        }
        await likeMoment(props.momentId, userId)
        setIslike(true)
        setLikecount(likecount + 1)
    }
    const handelComment = () => {
        setIsComment(!isComment)
    }
    return (
        <LikeWrapper>
            <div className="likecard">
                <span>第{props.momentId}楼</span>
                <Button type="text" onClick={e => handelLike()}>
                    {
                        like ? <LikeFilled style={{ color: '#1dc989' }} /> : <LikeOutlined />
                    }
                    {likecount ? <span>{likecount}</span> : <span>赞</span>}
                </Button>
                <Button type="text" onClick={e => handelComment()}>
                    <MessageOutlined /><span>{comment ? comment : '评论'}</span>
                </Button>
            </div>
            {/* {
                isComment ?
                    <TransitionGroup>
                        <CSSTransition
                            key={props.momentId}
                            classNames="comment"
                            timeout={500}
                            appear
                            exit={false}
                        >
                            <HYComment momentId={props.momentId} />
                        </CSSTransition>
                    </TransitionGroup>
                    : null
            } */}
            <CSSTransition
                in={isComment}
                classNames="comment"
                timeout={300}
                unmountOnExit={true}
                appear>
                <HYComment momentId={props.momentId} userId={userId}/>
            </CSSTransition>
        </LikeWrapper>
    )
}))
