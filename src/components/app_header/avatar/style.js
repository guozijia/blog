import styled from 'styled-components'

export const AvatarWrapper = styled.div`
    display:flex;
    align-items: center;
    padding: 0 24px;
    .avatar{
        cursor:pointer;
    }
    .message{
        color:#666666;
        margin:0 24px 0 84px;
    }
    @media all and (max-width: 768px){
        padding: 0 18px;
        .message{
            color:#666666;
            margin:0 12px 0 0;
        }
    }
`