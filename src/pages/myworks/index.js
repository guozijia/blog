import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Row, Col } from 'antd';
import { MyworksWrapper } from './style'
import { getMyworkListAction } from './store/actionGreators'
import HYCardWork from './cardwork'
import HYModal from './modal'
import HYDetail from './detail'
import HYMyworkSkeleton from '@/skeleton/mywork'

import UpsWork from './statics/code/ups.png'
import ChargeWork from './statics/code/chargeweb.png'
import EMSWork from './statics/code/ems.png'
import Visualization from './statics/code/charge.png'
import SolarWork from './statics/code/solar.png'


const code = [
    { pic: UpsWork, title: "农行UPS电源监控系统" },
    { pic: ChargeWork, title: "充电桩监控系统" },
    { pic: EMSWork, title: "储能系统监控" },
    { pic: Visualization, title: "数据可视化" },
    { pic: SolarWork, title: "光伏监控系统" }
]

export default memo(function HYMworks () {
    const [isDetail, setIsDetail] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyworkListAction())
    }, [dispatch])

    const { myworkList } = useSelector(state => ({
        myworkList: state.getIn(['mywork', 'myworkList'])
    }), shallowEqual)

    const handleDtail = () => {
        setIsDetail(true)
    }

    const { design = [] } = myworkList

    return (
        <MyworksWrapper>
            <h1>CODE</h1>
            <Row gutter={[12, 12]}>
                {
                    code.length ?
                        code.map((item, index) => {
                            return (
                                <Col span={6} key={index} onClick={e => handleDtail()}>
                                    <HYCardWork item={item} />
                                </Col>
                            )
                        }) : <HYMyworkSkeleton />
                }
            </Row>
            <h1>DESIGN</h1>
            <Row gutter={[12, 12]}>
                {
                    design.length ?
                        design.map((item, index) => {
                            return (
                                <Col span={6} key={index} onClick={e => handleDtail()}>
                                    <HYCardWork item={item} />
                                </Col>
                            )
                        }) : <HYMyworkSkeleton />
                }
            </Row>
            <HYModal>
                <CSSTransition
                    in={isDetail}
                    timeout={300}
                    classNames='detail'
                    unmountOnExit
                >
                    <HYDetail setIsDetail={setIsDetail} />
                </CSSTransition>
            </HYModal>
        </MyworksWrapper>
    )
})
