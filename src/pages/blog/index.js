import React, { memo } from 'react'
import { Row, Col } from 'antd'
import { BlogWrapper } from './style'

export default memo(function HYDiscover (props) {
    return (
        <BlogWrapper>
            <Row gutter={12}>
                <Col span={18}>
                    <span>asdasd</span>
                </Col>
                <Col span={6}>
                    <span>asdasd</span>
                </Col>
            </Row>
        </BlogWrapper>
    )
})
