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
            <Row gutter={{ xs: 0, sm: 12, md: 12, lg: 12 }}>
                <Col xs={24} sm={17} md={17} lg={17} xl={17}>
                    <HYCard />
                </Col>
                <Col xs={0} sm={7} md={7} lg={7} xl={7}>
                    <HYHotnews />
                </Col>
            </Row>
        </MainWrapper>
    )
})
 