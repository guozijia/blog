import React, { memo } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withRouter } from 'react-router-dom'

import Header from '@/components/app_header'
import HYContent from '@/components/app_content'

import { ContentWrapper, LayoutWrapper } from './style'
const Layout = memo(function (props) {
    const { pathname } = props.location
    return (
        <LayoutWrapper >
            <Header />
            <ContentWrapper>
                <TransitionGroup>
                    <CSSTransition
                        key={pathname}
                        classNames="card"
                        timeout={500}
                        appear
                        exit={false}
                    >
                        {/* <HYDemo /> */}
                        <HYContent pathname={pathname} />
                    </CSSTransition>
                </TransitionGroup>
            </ContentWrapper>
        </LayoutWrapper>
    )
})

export default withRouter(Layout)
