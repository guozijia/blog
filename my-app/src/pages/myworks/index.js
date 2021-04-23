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

    return (
        <MyworksWrapper>
            <Row gutter={[12, 12]}>
                {/* <Col span={6}>
                    <div className="workcard">
                        <img src="https://cdn.dribbble.com/users/5276/screenshots/15412507/media/b3e15a2a9956123d550592b49c3d5cb9.jpg?compress=1&resize=1000x750" alt="" />
                        <a href='/#'>
                            <div className="mask">
                                <p>为什么呢？</p>
                            </div>
                        </a>
                    </div>
                </Col> */}
                {   
                    myworkList.length?
                    myworkList.map((item, index) => {
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
                    <HYDetail setIsDetail={setIsDetail}/>
                </CSSTransition>
            </HYModal>
        </MyworksWrapper>
    )
})
