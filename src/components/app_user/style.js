import styled from 'styled-components'

export const AppUserWrapper = styled.div`
    background-color:#fff;
    padding:20px;
    border-radius: 4px;
    margin-bottom:12px;
    text-align: center;
    /* .updateImg{
        position: absolute;
        color: #fff;
        z-index: 999;
        margin-left: 16px;
        margin-top: 18px;
        display: none;
    } */
    .avatar{
        cursor: pointer;
        width: 56px;
        height: 56px;
        border: 1px solid #dedede;
        padding: 3px;
        border-radius: 50%;
        margin: 0 auto;
        :hover{
            border:1px solid #e4e4e4
        }
    }
    h3{
        font-weight: bold;
        line-height:24px;
    }
    /* .userCard{
        padding:8px 24px;
        span{
          font-size:13px;  
        }
    } */
`