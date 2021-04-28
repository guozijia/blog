import React, { memo } from 'react'
import { Row, Col } from 'antd'


import HYUser from '@/components/app_user'
//import HYWeather from '@/components/app_weather'
// import HYHotnews from '@/components/app_hotnews' 
// import DemoWordCloud from '@/components/app_charts'

import { ProfileWrapper } from './style'

export default memo(function HYDiscover (props) {
    return (
        <ProfileWrapper>
            <Row>
                <Col span={24}>
                    <HYUser /> 
                    {/* <HYWeather /> */}
                </Col>
            </Row>
        </ProfileWrapper>
    ) 
})