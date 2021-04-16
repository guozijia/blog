import styled from 'styled-components'

export const CommentWrapper = styled.div`

    border-radius: 6px;
    padding: 12px;
    border: 1px solid #f2f2f2;

    .commentInput{
        span{
            color:#f4f5f5;
        }
    }
    .comment-list{
        border-radius: 6px;
        padding: 0 6px;
        max-height: 300px;
        overflow: auto;
        background: #fafafa;
        .ant-comment-content-detail{
            font-size:13px;
        }
    }
`