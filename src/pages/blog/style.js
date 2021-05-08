import styled from 'styled-components'

export const ResumeWrapper = styled.div`
    width:960px;
    margin-top:72px;
    margin-right: auto;
    margin-left: auto;
    z-index: 0;
    position: relative;
    margin-bottom: 6px;
    table {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    }
    table td,
    table th {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 3px 5px;
    }
    table th {
    border-bottom: 2px solid #ccc;
    text-align: center;
    }

    /* blockquote 样式 */
    blockquote {
    display: block;
    border-left: 8px solid #d0e5f2;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
    }

    /* code 样式 */
    code {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
    }
    pre code {
    display: block;
    }

    /* ul ol 样式 */

    @media all and (max-width: 768px){
        width:100%;
        margin-top:72px;
        margin-right: auto;
        margin-left: auto;
        z-index: 0;
        position: relative;
        margin-bottom: 6px;
    }
    .main{
        &::before{
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

        &::after{
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
        /* padding-top: 25px;
        padding-bottom: 40px;
        position: relative;
        z-index: 3;
        padding-left: 25px;
        padding-right: 25px;
        border-width: 1px;
        border-style: solid;
        border-color: #e6e6e6;
        background-color:#fff; */
        z-index: 0;
        position: relative;
        margin-bottom: 6px;
        margin-right: 56px;
    }

    .main-nav-wrap{
        float: right;
        right: 1px;
        z-index: 4;
        width: 56px;
        position: relative;
        text-align: center;
        padding-bottom: 20px;
        .nav-cont{
            background: #fff;
            border-width: 1px 1px 0 0;
            border-style: solid;
            border-color: #e1e1e1;
            padding: 5px 0;
            ul{
                li{
                    line-height:42px;
                    color:#666;
                }
                .divider{
                    height:1px;
                    width:60%;
                    margin:0 auto;
                    background-color:#c1c1c1;
                }
            }
        }
        .nav-btm{
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 0;
            border-bottom: 20px solid transparent;
            border-left: 56px solid #fff;
            z-index: 0;
            &::after{
                content: '';
                position: absolute;
                left: -57px;
                bottom: -11px;
                width: 59px;
                height: 1px;
                background-color: #e1e1e1;
                -webkit-transform: rotate(
                -20deg
                );
                -ms-transform: rotate(-20deg);
                transform: rotate(
                -20deg
                );
                z-index: 1;
            }
        }
    }

`

export const CardWrapper = styled.div`
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
        
        h1{
            margin:20px 0;
            text-align:center;
        }
        h4{
            margin:20px 0;
            text-align:center;
            color:#666666;
        }
`