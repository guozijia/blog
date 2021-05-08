import React, { memo, useState, useEffect, useRef } from 'react';
import { Input, Button, message } from 'antd';
import { withRouter } from 'react-router-dom'
import E from 'wangeditor'
import { EditorWrapper } from './style'
import { createNote } from '@/services/note'
import { BASE_URL } from '@/services/config'
import Logo from '@/assets/img/logo.svg'

let editor = null

export default withRouter(memo(function HYNote (props) {
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const titleRef = useRef()
    useEffect(() => {
        editor = new E("#editor")
        editor.config.onchange = (newHtml) => {
            setContent(newHtml)
        }
        editor.config.uploadImgServer = `${BASE_URL}/note/upload/images`
        editor.config.uploadFileName = 'notePic'
        editor.create()

        return () => {
            editor.destroy()
        }
    }, [])
    const createHandel = async () => {
        setLoading(true)
        if (content.length > 30 && titleRef.current.state.value) {
            const data = {
                title: titleRef.current.state.value,
                content
            }
            try {
                await createNote(data)
                setLoading(false)
                props.history.push('/note')
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        } else {
            message.error('标题或者内容输入太短~');
            setLoading(false)
        }

    }
    return (
        <EditorWrapper>
            <div className="editor-top">
                <a href="/" className="logo" style={{ textDecoration: "none" }}>
                    <img src={Logo} alt="" />
                    <h2>𝓐𝓻𝓻𝓲𝓿𝓪𝓵</h2>
                </a>
                <div className="top_btn">
                    <Button
                        shape="round"
                        loading={loading}
                        style={{ marginRight: "10px" }}
                        type="primary"
                        onClick={e => createHandel()}>发布</Button>
                    <Button style={{ marginRight: "10px" }} shape="round" >草稿</Button>
                </div>
            </div>
            <Input
                ref={titleRef}
                style={{ backgroundColor: "#fff", fontSize: "18px", fontWeight: "bold" }}
                size="large"
                placeholder="标题(最多90个字)"
                maxLength={90}
                bordered={false} />
            <div id="editor"></div>
        </EditorWrapper>
    )
})
)