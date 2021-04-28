import React, { memo, useEffect, useState } from 'react'
import { Button, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { DetailWrapper } from './style'
import { getWorkDeatil } from '@/services/mywork'

export default memo(function HYDetail (props) {
    const { currentDetail } = props
    const closeHandle = () => {
        props.setIsDetail(false)
    }
    const [workDetail, setWorkDetail] = useState({})
    useEffect(() => {
        getWorkDeatil(currentDetail).then(res => {
            setWorkDetail(res.data[0])
        })
    }, [currentDetail])
    const { content, title, type, images = [], time } = workDetail
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
                <h1>{title}</h1>
                
                <p><Tag color="magenta">{type}</Tag>{time}</p>
                <div className="detailContent">{content}</div>
                {
                    images.map(item => {
                        return (
                            <img key={item} src={item} alt='' />
                        )
                    })
                }
                <div className="detailBtm"></div>
            </div>
        </DetailWrapper>
    )
})
