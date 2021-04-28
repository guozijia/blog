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

export default memo(function HYMworks () {

    const [isDetail, setIsDetail] = useState(false)
    const [currentDetail, setCurrentDetail] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyworkListAction())
    }, [dispatch])

    const { myworkList } = useSelector(state => ({
        myworkList: state.getIn(['mywork', 'myworkList'])
    }), shallowEqual)

    const handleDtail = (item) => {
        setIsDetail(true)
        setCurrentDetail(item.id)
    }

    return (
        <MyworksWrapper>
            <Row gutter={[12, 12]}>
                {
                    myworkList.length ?
                        myworkList.map((item, index) => {
                            return (
                                <Col xs={24} sm={12} md={12} lg={12} xl={6} key={index} onClick={e => handleDtail(item)}>
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
                    <HYDetail currentDetail={currentDetail} setIsDetail={setIsDetail} />
                </CSSTransition>
            </HYModal>
        </MyworksWrapper>
    )
})
