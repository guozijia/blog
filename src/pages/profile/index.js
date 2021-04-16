import React, { memo } from 'react'
import { Row, Col } from 'antd'


import HYUser from '@/components/app_user'
import HYWeather from '@/components/app_weather'
// import HYHotnews from '@/components/app_hotnews' 
// import DemoWordCloud from '@/components/app_charts'

import { ProfileWrapper } from './style'
import { getToken } from '@/utils/setAuthToken'

export default memo(function HYDiscover (props) {
    const token = getToken()
    return (
        <ProfileWrapper>
            <Row gutter={12}>
                <Col span={18}>
                    <div>吹</div>
                </Col>
                <Col span={6}>
                    {token ? <HYUser /> : null}
                    {/* <HYHotnews /> */}
                    <HYWeather />
                </Col>
            </Row>
        </ProfileWrapper>
    ) 
})