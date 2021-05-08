import React, { memo } from 'react'
import { Divider } from 'antd';

export default memo(function HYBlogCard (props) {
    const { info } = props
    return (
        <div>
            <h1>{info.title}</h1>
            <h4>{info.createAt}</h4>
            <span dangerouslySetInnerHTML={{
                __html: info.content
            }}>
            </span>
            <Divider />
        </div>
    )
})
