import React, { memo } from 'react'
import { CardWrapper } from './style'

import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default memo(function HYUploadCard (props) {

    const { list, setFileList } = props
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const handleChange = (info) => {
        setFileList(info.fileList.slice());
    }

    return (
        <CardWrapper>
            <Upload
                beforeUpload={file=>{
                    return false
                }}
                listType="picture-card"
                fileList={list}
                showUploadList={
                    { showPreviewIcon: false }
                }
                onChange={handleChange}
            >
                {list.length >= 8 ? null : uploadButton}
            </Upload>
        </CardWrapper>
    )
})
