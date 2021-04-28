import React, { memo, useState, useEffect, useCallback } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Avatar, Image, Button } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { Emoji } from 'emoji-mart'

import { MomentCardWrapper } from './style'
import HYLike from '@/components/app_like'
import { getMomentListAction } from '@/pages/discover/store/actionGreators'
import { getUserLikeAction } from '@/pages/login/store/actionGreators'
import HYDiscoverSkeleton from '@/skeleton/discover'
import HYPublish from '@/components/app_publish'

export default memo(function HYCard (props) {

    const { momentList, userlikes, isLogin } = useSelector(state => ({
        momentList: state.getIn(['moment', "momentList"]),
        userlikes: state.getIn(['login', 'userlikes']),
        isLogin: state.getIn(['login', 'isLogin'])
    }), shallowEqual)

    const [page, setPage] = useState(20)
    const [isFinish, setIsFinish] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMomentListAction(0, page))
        setLoading(false)
    }, [dispatch, page])

    useEffect(() => {
        if (isLogin) { dispatch(getUserLikeAction()) } return
    }, [dispatch, isLogin])


    const { res = [] } = momentList
    useEffect(() => {
        window.addEventListener('scroll', _handleScroll)
        return () => window.removeEventListener('scroll', _handleScroll)
    })

    const _handleScroll = useCallback(
        (event) => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body
            const { total } = momentList
            const scrollBottom = scrollHeight - scrollTop - clientHeight
            if (scrollBottom < 100) {
                setPage(page + 20)
                setLoading(true)
            }
            if (page > total) {
                setIsFinish(true)
            }
        }
        , [page, momentList])

    // const contentRep = (content)=>{
    //     const res = content.replace(/\[.*?\]/g, (e)=>{
    //         const id = e.replace(/^[[\s\S]{1,}]$/,'$&')
    //         console.log(id)
    //         return (
    //             <Emoji set='twitter' emoji={{ id: 'grinning' }} size={24} />
    //         )
    //     })
    //     return res
    // }

    return (
        <MomentCardWrapper>
            <div className="moment comment-input">
                <HYPublish isLogin={isLogin} />
            </div>
            <div className="moment">
                {
                    res.length ?
                        res.map((item, index) => {
                            const like = userlikes.includes(item.id)
                            return (
                                <div className="item" key={item.id}>
                                    <div className="item_avatar">
                                        <Avatar gap src={item.userinfo.avatar}>U</Avatar>
                                    </div>
                                    <div className="item_content">
                                        <div className="name">{item.userinfo.name}</div>
                                        <p>
                                            {moment(item.createTime).calendar()}
                                        </p>
                                        <div className="content">
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.content.replace(/\[.*?\]/g, v => Emoji({
                                                    html: true,
                                                    set: 'twitter',
                                                    emoji: v.replace(/\[|]/g, ''),
                                                    fallback: (emoji, props) => {
                                                        return emoji ? `:${emoji.short_names[0]}:` : v
                                                    },
                                                    size: 18
                                                }))
                                            }}>
                                            </span>
                                        </div>
                                        <div>
                                            <Image.PreviewGroup>
                                                {
                                                    item.images ? item.images.map((image, index) => {
                                                        return (
                                                            <Image
                                                                key={image}
                                                                width={150}
                                                                src={image + '?type=nomal'}
                                                                preview={{
                                                                    src: image
                                                                }}
                                                            />
                                                        )

                                                    }) : null
                                                }
                                            </Image.PreviewGroup>
                                        </div>
                                        <HYLike
                                            momentId={item.id}
                                            userId={item.userinfo.id}
                                            islike={like}
                                            count={item.likecount}
                                            comment={item.commentcount}
                                        />
                                    </div>
                                </div>

                            )
                        })
                        : <HYDiscoverSkeleton />
                }
                <div
                    style={{
                        textAlign: 'center',
                        paddingBottom:"20px"
                    }}
                >
                    {
                        isFinish ? <span>没有更多了</span> : <Button loading={loading} size='small'>查看更多</Button>
                    }
                </div>
            </div>
        </MomentCardWrapper>
    )
})
