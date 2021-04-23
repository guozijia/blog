import styled from 'styled-components'

export const NoticeWrapper = styled.div`

    .message-enter , .message-appear{
        position:absolute;
        top:90px;
        right: 72px;
    }

    .message-enter-active , .message-appear-active{
        position:absolute;
        top:70px;
        right: 72px;
        transition: all 300ms
    }

    .message-enter-done , .message-appear-done{
        position:absolute;
        top:70px;
        right: 72px;
        transition: all 300ms
    }

    .message-exit{
        position:absolute;
        opacity:1;
        top:70px;
        right: 72px;
        opacity: 1;
    }

    .message-exit-active{
        position:absolute;
        opacity:0;
        top:90px;
        right: 72px;
        transition: all 300ms
    }
    
`

export const MessageWrapper = styled.div`
    border: 1px solid #eff2f7;
    border-radius: .8rem;
    transform-origin: left top 0;
    background-color: #fff;
    box-shadow: 0 0 1.25rem rgb(31 45 61 / 8%);
    width:300px;
    h3{
        padding:12px;
        border-bottom:1px solid #e2e2e2
    }
    a{
        text-align:center;
        display:block;
        line-height:30px;
    }
    .noticeContent{
        max-height:400px;
        overflow:overlay;

        .noticeCard{
            padding:14px;
            display:flex;
            justify-content:space-between;
            .card{
                display:flex;
                .card_right{
                    margin-left:12px;
                    max-width: 220px;
                    span{
                        color:#2196f3;
                    }
                }
            }
            p{
                color:#1dc989;
            }
            :hover{
                background-color:#f4f5f5;
                transition:all .3s ease;
                cursor: pointer;
            }
        }
    }
    
`