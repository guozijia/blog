import styled from 'styled-components'

export const ModerBootoomWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    .upload-list-inline .ant-upload-list-item {
        /* float: left; */
        width: 360px;
    }
    .upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {
        float: right;
    }
    .ant-form-item{
        margin-bottom:0px;
    }
    .comment-left{
        display:flex;
        span{
            display:flex;
            cursor: pointer;
            p{
                font-size:13px;
                padding-left:6px;
                &:hover{
                    color:#1dc989;
                }
            }
            .emojiIcon{
                color: #949494;
                font-size: 18px;
                color:#1dc989;
            }
            .uploadIcon{
                margin-left:20px;
                color: #949494;
                font-size: 18px;
                color:#1dc989;
            }
        }

        .emoji-enter , .emoji-appear{
            position: absolute;
            z-index: 999;
            opacity: 0;
            transform: translateY(10%);
        }
        .emoji-enter-active , .emoji-appear-active{
            position: absolute;
            z-index: 999;
            opacity: 1;
            transform: translateY(0);
            transition: all 400ms ;
        }
        .emoji-enter-done , .emoji-appear-done{
            position: absolute;
            z-index: 999;
            transition: all 400ms;
        }

        .emoji-exit{
            position: absolute;
            z-index: 999;
            opacity: 1;
            transform: translateY(0%);
        }
        .emoji-exit-active{
            position: absolute;
            z-index: 999;
            opacity: 0;
            transform: translateY(10%);
            transition: all 400ms
        }
    }
    
`

export const CardWrapper = styled.div`
    width:340px;
`

export const EmojiWrapper = styled.div`
    margin-top:12px;
    img{
        position: absolute;
        top: -11px;
        left: 20px;
    }
`