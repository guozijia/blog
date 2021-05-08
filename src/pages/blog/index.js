import React, { memo, useEffect } from 'react'
import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { HighlightOutlined, FontColorsOutlined, GitlabOutlined, DisconnectOutlined, LinkOutlined } from '@ant-design/icons'
import { ResumeWrapper, CardWrapper } from './style'
import HYBlogCard from './card'
import { getNoteListAction } from './store/actionGreators'

export default memo(function HYResume () {
    const dispatch = useDispatch()
    const { noteList } = useSelector(state => ({
        noteList: state.getIn(['note', "noteList"]),
    }), shallowEqual)
    useEffect(() => {
        dispatch(getNoteListAction(0, 20))
    }, [dispatch])
    return (
        <ResumeWrapper>
            <div className="main-nav-wrap">
                <div className="nav-cont">
                    <ul>
                        <li>
                            <Tooltip placement="right" title={"记笔记"}>
                                <NavLink to="/editor" target="_blank">
                                    <HighlightOutlined style={{ fontSize: "18px" }} />
                                </NavLink>
                            </Tooltip>
                        </li>
                        <div className="divider"></div>
                        <li><NavLink to="/note"><FontColorsOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                        <li><NavLink to="/note"><GitlabOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                        <li><NavLink to="/note"><DisconnectOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                        <li><NavLink to="/note"><LinkOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                    </ul>
                </div>
                <div className="nav-btm"></div>
            </div>
            <div className='main'>
                <CardWrapper>
                    {
                        noteList.map((item, index) => {
                            return (
                                <HYBlogCard key={item.id} info={item}/>
                            )
                        })
                    }
                </CardWrapper>
            </div>
        </ResumeWrapper>
    )
})
