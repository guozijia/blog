import React, { memo, useEffect, useCallback, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ResumeWrapper, Focusinfo } from './style'
import useTypewriter from "react-typewriter-hook";
import { getMouseDownAction } from './store/actionGreators'

const aihaoArr = ["UI设计师", "web开发工程师", "NodeJs开发工程师", "区块链爱好者", "历史爱好者"]
let index = 0;

export default memo(function HUResume () {

    const [aihao, setAihao] = useState("UI设计者")
    const intervalRef = useRef({});
    const name = useTypewriter(aihao);

    const dispatch = useDispatch()

    useEffect(() => {
        const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
        const mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel'
        window.addEventListener(mousewheel, _handleScroll)
        return () => window.removeEventListener(mousewheel, _handleScroll)
    })

    const _handleScroll = useCallback((event) => {
        var isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
        if (isFirefox) {
            if (event.detail > 0) {
                dispatch(getMouseDownAction(false))
            } else {
                dispatch(getMouseDownAction(true))
            }
        } else {
            if (event.wheelDelta > 0) {
                dispatch(getMouseDownAction(false))
            } else {
                dispatch(getMouseDownAction(true))
            }
        }
    }, [dispatch])

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            index = index > 4 ? 0 : ++index;
            setAihao(aihaoArr[index]);
        }, 3000);
        return function clear () {
            clearInterval(intervalRef.current);
        };
    }, [aihao])

    return (
        <ResumeWrapper>
            <div className="resumepage1">
                <div className="content">
                    <Focusinfo>
                        <h1 className='glitch' data-text="HaloMYBOLG!">HaloMYBOLG!</h1>
                    </Focusinfo>
                    <div className="text">我是一名 <span>{name}</span></div>
                    <div className="text">
                        "欢迎来到我的个人网站，Arrival取自电影《降临》，一种颠覆因果论的世界;本站前端采用React+Ant Design,后端使用了koa框架，数据库使用Mysql。"
                    </div>
                </div>
            </div>
            <div className="resumepage2">

            </div>
        </ResumeWrapper>
    )
})
