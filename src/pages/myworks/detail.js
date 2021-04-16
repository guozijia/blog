import React, { memo } from 'react'
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { DetailWrapper } from './style'

export default memo(function HYDetail (props) {
    const closeHandle = () => {
        props.setIsDetail(false)
    }
    return (
        <DetailWrapper>
            <div className="closeBtn" onClick={e => closeHandle()}>
                <Button
                    onClick={e => closeHandle()}
                    type="text"
                    icon={<CloseOutlined style={{ color: "#fff" }} />}>
                </Button>
            </div>
            <div className="contentDtail">
                内容
            </div>
        </DetailWrapper>
    )
})
