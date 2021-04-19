import React, { memo, forwardRef } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { EmojiWrapper } from './style'
import EmojiTop from '@/assets/img/emojiTop.png'

const HYEmoji = forwardRef(
    (props, ref) => {
        const { setFieldsValue, getFieldValue } = props.form
        const handelEmoji = (e) => {
            setFieldsValue({
                content: getFieldValue("content") ?
                    (getFieldValue("content") + '[' + e.id + ']') :
                    '[' + e.id + ']'
            })
        }
        return (
            <EmojiWrapper ref={ref}>
                <img src={EmojiTop} alt="" />
                <Picker color="#1dc989" set='twitter' onSelect={handelEmoji} />
            </EmojiWrapper>
        )
    }
)

export default memo(HYEmoji)
