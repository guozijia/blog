import React, { memo } from 'react'
import { Divider, Progress, Row, Col } from 'antd';
import { ResumeWrapper, CardWrapper } from './style'
import Guozijia from '@/assets/img/1234.gif'

export default memo(function HYResume () {
    return (
        <ResumeWrapper>
            <div className='main'>
                <h2>Helo, I’m Ola Lowe!</h2>
                <CardWrapper>
                    <p>
                        Logo or your Company Name, unless of course you are Microsoft or the Yellow Pages online directorye core of your marketing, the central theme around your products and services. Your brand is not your Logo or your Company Name, unless of course you are Microsoft or the Yellow Pages online directory.
                    </p>
                    <img src={Guozijia} alt=""></img>
                </CardWrapper>
                <Divider />
                <h2>专业技能</h2>
                <Row>
                    <Col span={12}>
                        <CardWrapper>
                            <h3>UI设计</h3>
                            <Progress percent={90} status="active" />
                            <p>
                                熟练使用PS,AI基本设计软件，使用Axure等软件进行原型设计，使用C4D进行建模和渲染，使用AE视频渲染，对设计有自己主观的见解，并能客观的说服用户。
                            </p>
                        </CardWrapper>
                    </Col>
                    <Col span={12}>
                        <CardWrapper>
                            <h3>前端开发</h3>
                            <Progress percent={90} status="active" />
                            <p>
                                熟悉使用HTML,CSS,JavaScript，熟练使用Vue,React等流行前端框架，熟悉webpack等构建工具，对跨域，HTTP协议有处理经验。
                            </p>
                        </CardWrapper>
                    </Col>
                    <Col span={12}>
                        <CardWrapper>
                            <h3>后端</h3>
                            <Progress percent={80} status="active" />
                            <p>
                                掌握node.js，MySQL等技术,熟悉Koa,Express等node框架
                            </p>
                        </CardWrapper>
                    </Col>
                </Row>
                <Divider />
                <h2>兴趣爱好</h2>
                <CardWrapper>
                    <p>
                        一个积极向上的爱好意味着你是一个对生活充满热情的人，遭遇困难依然能保持乐观心态，面对不公也不会怨天尤人。美国国际教育协会的报告显示，在2017年美国名校录取的新生中，
                        78%的学生有慈善活动经历，66%有体育方面的特长，做过学生会干部的占41%，有音乐特长的占37%，在科学竞赛中拿奖的占34%，有戏剧表演特长的占21%。
                    </p>
                </CardWrapper>

            </div>
        </ResumeWrapper>
    )
})
