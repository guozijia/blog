import React, { memo, useState } from 'react'
// import { Skeleton} from 'antd'
import { CSSTransition } from 'react-transition-group'
import { CardWrapper } from './style'

export default memo(function HYCardWork (props) {

    const [inProp, setInProp] = useState(false);
    const { cover_url, title, type } = props.item
    const maskHandle = (index) => {
        if (index === -1) {
            setInProp(false)
        } else {
            setInProp(true)
        }
    }
    return (
        <CardWrapper inProp={inProp} onMouseLeave={e => { maskHandle(-1) }} onMouseEnter={e => maskHandle(1)}>
            <img src={cover_url} alt="" />
            <CSSTransition
                appear
                in={inProp}
                classNames="mask"
                unmountOnExit
                timeout={300}
            >
                <div className="maskText">
                    <p>{title}</p>
                </div>
            </CSSTransition>
        </CardWrapper>
    )
})
