import styled from 'styled-components'
//import loginTop from 'https://cdn.dribbble.com/assets/signup-banners/jerzy-3208c588289fb90e9263d377d1b85be930da6f7419ac857237927d975871afa3.gif'

export const LoginWrapper = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-repeat: no-repeat;
    /* background-color: #b8e5f8; */
    background-size: cover;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-image:url(${props => "https://cn.bing.com/" + props.url});
    .loginFrom{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
            min-height: 688px;
            height: calc(100% - 42px);
            box-sizing: border-box;

            .login{
                box-sizing: border-box;
                margin: 0;
                min-width: 0;
                padding: 0;
                background-color: #FFFFFF;
                box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
                border-radius: 10px;
                background-color: #FFFFFF;
                width: 400px;
                overflow: hidden;
                    .login_top{
                        height: 121px;
                        padding: 90px 36px;
                        background: right bottom no-repeat;
                        background-size: auto 80%;
                        padding-right: 55%;
                        background-color: #2a1a03;
                        margin-bottom:24px;
                        background-image:url("https://cdn.dribbble.com/assets/signup-banners/spacecade_800-5f83a6936cf5c2f1605e816927d4817663c116e4ad77370ce06e92a525661926.png");
                        .login-top-title{
                            margin-top:-20px;
                            h3{
                                color:#FFFFFF;
                                line-height:30px;
                                font-weight:bold;
                            }
                        }

                    }
            }
    }
    .footer{
        margin: 0 auto;
        color: #fff;
    }
`