import styled from 'styled-components'

export const MomentCardWrapper = styled.div`
    .moment,.comment-input{
        margin-bottom:12px;
    }
    .moment{
        background-color:#fff;
        border-radius: 4px;
        padding: 18px 18px 0 18px;
        .item{
            display:flex;
            margin-bottom: 30px;

            /* :hover{
                background-color:#f9f9f9;
                transition:all .5s
            } */
            .item_avatar{
                margin-right:12px;
            }
            .item_content{
                width:100%;
                border-bottom:1px dashed #e2e2e2;
                p{
                    color:#b5bec6;
                    font-size:12px;
                    margin-top:3px;
                }
                .name{
                    font-weight:bold;
                }
                .content{
                    padding: 10px 0;
                }
                .ant-image{
                    margin-right:3px;
                }
                span{
                    span{
                        margin:0 2px
                    }
                }
                .card-bottom{
                    span{
                        color: #60717f;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .rightCard{
        /* background-color:#fff; */
        /* padding:10px; */
    }
`