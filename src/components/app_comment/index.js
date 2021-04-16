import React, { memo, useEffect, useState } from 'react'
import { Comment, List, Input, Button, Form } from 'antd';
import { getCommentList, commentevent } from '@/services/moment'
import { CommentWrapper } from './style'
import moment from 'moment'
import 'moment/locale/zh-cn'

export default memo(function HYComment (props) {

    const { momentId, userId } = props
    const [comment, setComment] = useState([])
    const [loading, setloading] = useState(false)
    const { TextArea } = Input

    const [from] = Form.useForm()

    useEffect(() => {
        getCommentList(momentId).then(res => {
            setComment(res.data)
        })
    }, [momentId])

    const handelComment = async (values) => {

        setloading(true)
        await commentevent(momentId, values.content, userId)
        getCommentList(momentId).then(res => {
            setComment(res.data)
            setloading(false)
            from.resetFields()
        })
    }



    return (
        <CommentWrapper>
            <div className="commentInput">
                <Form name="nest-messages" onFinish={handelComment} form={from}>
                    <Form.Item
                        name="content"
                        rules={[{ required: true, message: '你还没有输入任何内容' }]}
                        >
                        <TextArea
                            placeholder="发表评论"
                        />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" loading={loading}>
                            评论
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            {/* <Divider/> */}
            <List
                className="comment-list"
                itemLayout="horizontal"
                dataSource={comment}
                renderItem={item => (
                    <li>
                        <Comment
                            author={item.userinfo.name}
                            avatar={item.userinfo.avatar}
                            content={item.content}
                            datetime={moment(item.datetime).calendar()}
                        />
                    </li>
                )}
            />
        </CommentWrapper>
    )
})
