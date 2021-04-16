import React, { memo, useEffect, useState } from 'react'
import { getHotnews } from '@/services/external'
import { HotNewsWrapper } from './style'

export default memo(function HYHotnews () {

    const [hot, setHot] = useState([])

    useEffect(() => {
        getHotnews().then(res => {
            const { newslist } = res.data
            console.log(res)
            newslist ? setHot(newslist):setHot([]) 
            // setHot(newslist)
        })
    }, [])

    return (
        <HotNewsWrapper>
            <h3>今日趋势</h3>
            <ul>
                {
                    hot.map((item, index) => {
                        return (
                            <li className="hotWeibo" key={index}>
                                <span>{index+1}</span>
                                <p>{item.hotword}</p>
                            </li>
                        )
                    })
                }
            </ul>

        </HotNewsWrapper>
    )
})
