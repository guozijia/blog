import styled from 'styled-components'

export const HotNewsWrapper = styled.div`
    background-color:#fff;
    border-radius: 4px;
    padding:12px;
    h3{
        color: #222531;
        font-weight: bold;
        font-size: 14px;
    }
    ul{
        margin-top: 6px;
        li,.hotWeibo{
            &:nth-child(-n+6){
                span{
                    background: #ff387b;
                } 
            }
            font-size: 12px;
            display: flex;
            padding: 6px 0;
            span{
                width:18px;
                height:18px;
                line-height:18px;
                text-align: center;
                font-family: "Roboto", sans-serif;
                background: #b8b8b8;
                color: #fff;
                border-radius: 14%;
            }
            p{
                margin-left:12px;
            }
        }
    }

`