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
            <h3>????????????</h3>
            <Divider/>
            <Form  {...layout} form={form} name="nest-messages" onFinish={onFinish} >
                <Form.Item name="title" label="??????" rules={[{ required: true, message: '???????????????'}]}>
                    <Input autoComplete="off"/>
                </Form.Item>
                <Form.Item
                    name="content"
                    label="??????"
                    rules={[{ required: true, message: '??????????????????????????????' }]}>
                    <TextArea
                        rows={4}
                    />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="??????"
                    hasFeedback
                    rules={[{ required: true, message: '????????????????????????' }]}
                >
                    <Select>
                        <Option value="code">??????</Option>
                        <Option value="design">??????</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="workcover"
                    label="??????"
                    rules={[{ required: true, message: '??????????????????' }]}
                >
                    <Upload
                        name="cover"
                        listType="picture-card"
                        maxCount={1}
                        {...uploadCoverProps}
                        className="upload-list-inline"
                    >

                        <p style={{ color: "#999", fontSize: "13px" }}><CloudUploadOutlined />????????????</p>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="workpic"
                    label="??????"
                    rules={[{ required: true, message: '?????????????????????' }]}
                >
                    <Upload
                        name="mywork"
                        listType="picture-card"
                        {...uploadPicProps}
                        className="upload-list-inline"
                    >
                        <p style={{ color: "#999", fontSize: "13px" }}><CloudUploadOutlined />????????????</p>
                    </Upload>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        ??????
                    </Button>
                </Form.Item>
            </Form>
        </UpworkWrapper>
    )
})


