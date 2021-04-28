import React, { memo, useState } from 'react'
import { Input, Form, Button, Upload, Select,Divider  } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons'

import { UpworkWrapper } from './style'
import { uploadCover, uploadPic, uploadText } from '@/services/mywork'

export default memo(function HYUpwork () {
    const { TextArea } = Input;
    const [form] = Form.useForm()
    const [loading, setloading] = useState(false)
    const [coverFileList, setCoverFileList] = useState([]);
    const [picFileList, setPicFileList] = useState([]);
    const { Option } = Select;
    const coverFormData = new FormData();
    const picFormData = new FormData()
    const onFinish = async (values) => {
        //console.log(values)
        setloading(true)
        const { title, content, type } = values
        const res = await uploadText(title, content, type)
        if (res.data.flag) {
            coverFileList.forEach((file) => {
                coverFormData.append('cover', file.originFileObj);
            });
            picFileList.forEach((file) => {
                picFormData.append('mywork', file.originFileObj);
            });
            await uploadCover(res.data.workId, coverFormData)
            await uploadPic(res.data.workId, picFormData)
            setloading(false)
            setCoverFileList([])
            setPicFileList([])
            form.resetFields()
        }
    };
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 20 }
    };
    const tailLayout = {
        wrapperCol: { offset: 2, span: 20 }
    };
    const uploadCoverProps = {
        beforeUpload: file => {
            return false;
        },
        onChange: (info) => {
            setCoverFileList([...info.fileList])
        },
        fileList: coverFileList,
        showUploadList: true,
        multiple: false
    }

    const uploadPicProps = {
        beforeUpload: file => {
            return false;
        },
        onChange: (info) => {
            setPicFileList([...info.fileList])
        },
        showUploadList: true,
        fileList: picFileList,
        multiple: true
    }

    return (
        <UpworkWrapper>
            <h3>上传作品</h3>
            <Divider/>
            <Form  {...layout} form={form} name="nest-messages" onFinish={onFinish} >
                <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题'}]}>
                    <Input autoComplete="off"/>
                </Form.Item>
                <Form.Item
                    name="content"
                    label="说明"
                    rules={[{ required: true, message: '你还没有输入任何内容' }]}>
                    <TextArea
                        rows={4}
                    />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="类型"
                    hasFeedback
                    rules={[{ required: true, message: '请选择项目类型！' }]}
                >
                    <Select>
                        <Option value="code">代码</Option>
                        <Option value="design">设计</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="workcover"
                    label="封面"
                    rules={[{ required: true, message: '请上传封面！' }]}
                >
                    <Upload
                        name="cover"
                        listType="picture-card"
                        maxCount={1}
                        {...uploadCoverProps}
                        className="upload-list-inline"
                    >

                        <p style={{ color: "#999", fontSize: "13px" }}><CloudUploadOutlined />上传封面</p>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="workpic"
                    label="图片"
                    rules={[{ required: true, message: '请上传项目图片' }]}
                >
                    <Upload
                        name="mywork"
                        listType="picture-card"
                        {...uploadPicProps}
                        className="upload-list-inline"
                    >
                        <p style={{ color: "#999", fontSize: "13px" }}><CloudUploadOutlined />上传图片</p>
                    </Upload>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </UpworkWrapper>
    )
})


