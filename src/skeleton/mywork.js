import React, { memo } from 'react'
import ContentLoader from 'react-content-loader'
import { Col } from 'antd';


export default memo(function HYMyworkSkeleton(props) {
    return (
        <>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%"/>
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
                        <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
                        <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
                        <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
            <Col span={6}>
                <ContentLoader>
                    <rect width="100%" height="100%" />
                </ContentLoader>
            </Col>
        </>
    )
})
