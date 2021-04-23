import React, { memo, useState, useEffect, useRef } from 'react'
import { Input, Form, Button, Upload, Popover } from 'antd';
import { PictureFilled, SmileFilled } from '@ant-design/icons';
// import ImgCrop  from 'antd-img-crop'
import { withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { getMomentListAction } from '@/pages/discover/store/actionGreators'
import { createMoment } from '../../services/moment'
import { ModerBootoomWrapper } from './style'
import { useDispatch } from 'react-redux'
import { uploadMomentPic } from '../../services/moment'
import UploadCard from './card'
import HYEmoji from './emoji'

export default withRouter(memo(function HYPublish (props) {

    const [loading, setloading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [fileList, setFileList] = useState([]);
    const [isEmoji, setIsEmoji] = useState(false)
    const { isLogin } = props

    const { TextArea } = Input;
    const [form] = Form.useForm()
    const ref = useRef()
    const dispatch = useDispatch()

    const formData = new FormData();
    const onFinish = async (values) => {
        const res = await createMoment(values.content)
        setloading(true)
        if (res.data.flag) {
            fileList.forEach((file) => {
                formData.append('picture', file.originFileObj);
            });
            await uploadMomentPic(res.data.momentId, formData)
            setloading(false)
        }
        //props.history.push('/discover')
        dispatch(getMomentListAction(0, 20))
        form.resetFields()
    };


    useEffect(() => {
        document.addEventListener('click', documentClick)
    })

    const documentClick = (e) => {
        if (ref.current) {
            if (!ref.current.contains(e.target)) {
                setIsEmoji(false)
            }
        }
    }
    const handelEmoji = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        setIsEmoji(true)
    }

    const uploadProps = {
        beforeUpload: file => {
            // const reader = new FileReader();
            // reader.readAsDataURL(file);
            // reader.onload = () => {
            //     setVisible(true)
            //     // setImgUrl(pre => {
            //     //     return [...pre, file]
            //     // })
            // }
            return false;
        },
        onChange: (info) => {
            setVisible(true)
            setFileList([...info.fileList])
        },
        fileList,
        showUploadList: false,
        multiple: true //设置只上传一张图片，根据实际情况修改
    }

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <div>
            <Form form={form} name="nest-messages" onFinish={onFinish} >
                <Form.Item
                    name="content"
                    style={{ marginBottom: "8px" }}
                    rules={[{ required: true, message: '你还没有输入任何内容' }]}>
                    <TextArea
                        placeholder="说点什么吧~，我们有言论自由！"
                        rows={4}
                    />
                </Form.Item>
                <ModerBootoomWrapper>
                    <div className="comment-left">
                        <Form.Item
                            name="emoji"
                            style={{ marginBottom: "8px" }}
                        >
                            <>
                                <span onClick={e => handelEmoji(e)}>
                                    <SmileFilled className="emojiIcon" />
                                    <p>表情</p>
                                </span>
                                <CSSTransition
                                    in={isEmoji}
                                    classNames="emoji"
                                    timeout={400}
                                    unmountOnExit={true}
                                    appear>
                                    <HYEmoji ref={ref} form={form} />
                                </CSSTransition>
                            </>
                        </Form.Item>
                        <Form.Item
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Popover
                                placement="bottom"
                                content={<UploadCard setFileList={setFileList} list={fileList} />}
                                title="本地上传图片"
                                visible={visible}
                            >
                                <Upload
                                    name="picture"
                                    action="/upload.do"
                                    listType="picture"
                                    {...uploadProps}
                                    className="upload-list-inline"
                                >
                                    <span>
                                        <PictureFilled className="uploadIcon" />
                                        <p>图片</p>
                                    </span>
                                </Upload>
                            </Popover>
                        </Form.Item>
                    </div>
                    <Form.Item >
                        <Button type="primary" disabled={!isLogin} htmlType="submit" loading={loading}>
                            {isLogin?"发表动态":"请登录"}
                        </Button>
                    </Form.Item>
                </ModerBootoomWrapper>
            </Form>
        </div>
    )
})
)

