import styled from 'styled-components'

export const ResumeWrapper = styled.div`
    width:960px;
    margin-right: auto;
    margin-left: auto;
    background-color:#fff;
    z-index: 0;
    position: relative;
    margin-bottom: 6px;
    ::before{
        content:'';
        border-width: 1px;
        border-style: solid;
        top: 3px;
        left: 3px;
        z-index: 2;
        width: 100%;
        height: 100%;
        position: absolute;
        border-color: #e6e6e6;
        background-color:#fff;
    }
    .main{
        padding-top: 25px;
        padding-bottom: 40px;
        position: relative;
        z-index: 3;
        padding-left: 25px;
        padding-right: 25px;
        border-width: 1px;
        border-style: solid;
        border-color: #e6e6e6;
        background-color:#fff;
        h2{

        }
        img{
            width:100px;
            float:right;
        }
    }
    ::after{
        content:'';
        border-width: 1px;
        border-style: solid;
        top: 6px;
        left: 6px;
        width: 100%;
        height: 100%;
        border-color: #e6e6e6;
        position: absolute;
        background-color:#fff;
    }

`

export const CardWrapper = styled.div`
    padding:20px;
`