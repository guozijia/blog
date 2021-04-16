import React, { memo } from 'react'
import { Row, Col } from 'antd'

import HYHotnews from '@/components/app_hotnews'
// import HYUser from '@/components/app_user'
// import DemoWordCloud from '@/components/app_charts'

import { MainWrapper } from './style'


import HYCard from './card'

export default memo(function HYDiscover (props) {
    return (
        <MainWrapper>
            <Row gutter={12}>
                <Col span={17}>
                    <HYCard />
                </Col>
                <Col span={7}>
                    <HYHotnews />
                </Col>
            </Row>
        </MainWrapper>
    )
})
