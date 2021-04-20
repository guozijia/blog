import React, { memo, useEffect, useCallback, useState, useRef } from 'react'
import { ResumeWrapper } from './style'
import useTypewriter from "react-typewriter-hook";
//import ImgUser from '@/assets/img/user.jpg'

const aihaoArr = ["UI设计者", "web开发者", "NodeJs开发者", "区块链爱好者", "历史爱好者"]
let index = 0;

export default memo(function HUResume () {

    const [aihao, setAihao] = useState("UI设计者")
    const intervalRef = useRef({});
    const name = useTypewriter(aihao);

    useEffect(() => {
        window.addEventListener('scroll', _handleScroll)
        return () => window.removeEventListener('scroll', _handleScroll)
    })

    const _handleScroll = useCallback(
        (event) => {
            //const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body
        }
        , []
    )

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
                    <div className="image">
                        <img src="http://localhost:8000/users/15/avatar/4dd270833af1922cf4290765fed5fb61" alt="" />
                    </div>
                    <h3>Mahira Rashid</h3>
                    <div className="text">我是一名 {name}</div>
                    <div className="text">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore mega aliqua enim minim veniam.</div>
                </div>
            </div>
        </ResumeWrapper>
    )
})
