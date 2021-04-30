import styled from 'styled-components'
import ImgPage1 from '@/assets/img/as-img-01.jpg'
import grid from '@/assets/img/grid.png';

export const ResumeWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    margin-top:60px;
    .resumepage1{
        width:100%;
        height:100vh;
        display: flex;
        align-items: center;
        background-image:url(${ImgPage1});
        background-size: cover;
        background-position: center center;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 3;
            background-attachment: fixed;
            background-image: url(${grid});
        }
        .content{
            width: 900px;
            margin: 0 auto;
            text-align: center;
            .image{
                width: 120px;
                height: 120px;
                margin: 0 auto;
                margin-bottom: 25px;
                background: #fff;
                border-radius: 50%;
                img{
                    border: 5px solid rgba(31, 53, 67, 0.10);
                    border-radius: 50%;
                    width:100%;
                }
            }
            h3{
                color:#fff;
                font-weight: 500;
                font-size:24px;
                margin-bottom: 20px;
            }
            span{
                margin-bottom:14px;
            }
            .text{
                font-size: 14px;
                max-width: 600px;
                margin: 0 auto;
                margin-bottom: 20px;
                color: #fff;
                line-height:20px;
                background: rgb(0 0 0 / 10%);
                span{
                    font-weight:600;
                }
            }
            .downBtn{
                z-index:5;
                width:300px;
            }
        }
    }
    .resumepage2{
    }
`

export const Focusinfo = styled.div`
    position: relative;
    max-width: 800px;
    padding: 0 10px;
    top: 0%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    text-align: center;
    z-index: 99;
    -webkit-transition: .4s ease all;
    -moz-transition: .4s ease all;
    -o-transition: .4s ease all;
    transition: .4s ease all;  
    @media (max-width: 768px){
        display: none;
    }
    .header-tou{
        img{
            box-shadow: inset 0 0 10px #000;
            padding: 5px;
            opacity: 1;
            transform: rotate(0);
            transition: all ease 1s;
            width: 130px;
            height: 130px;
            border-radius: 100%;
        }
    }
    .header-tou img:hover {
        transform: rotate(360deg);
    }
    .glitch{
        font-family: 'Ubuntu',sans-serif;
        position: relative;
        color: #fff;
        mix-blend-mode: lighten;
        margin: auto;
        font-size: 80px;
        text-transform: uppercase;
        font-weight: bold;
    }
    .glitch:before, .glitch:after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        width: 100%;
        background: rgba(0,0,0,0);
        clip: rect(0,0,0,0);
    }
    .glitch:before {
        left: -1px;
        text-shadow: 1px 0 #ff3f1a;
    }
    .glitch:after {
        left: 1px;
        text-shadow: -1px 0 #00a7e0;
    }
    .glitch:hover:before {
        text-shadow: 4px 0 #ff3f1a;
        animation: glitch-loop-1 .8s infinite ease-in-out alternate-reverse;
    }
    .glitch:hover:after {
        text-shadow: -5px 0 #00a7e0;
        animation: glitch-loop-2 .8s infinite ease-in-out alternate-reverse;
    }
    @-webkit-keyframes glitch-loop-1 {
        0% {
            clip: rect(36px,9999px,9px,0)
        }
    
        25% {
            clip: rect(25px,9999px,99px,0)
        }
    
        50% {
            clip: rect(50px,9999px,102px,0)
        }
    
        75% {
            clip: rect(30px,9999px,92px,0)
        }
    
        100% {
            clip: rect(91px,9999px,98px,0)
        }
    }
    
    @keyframes glitch-loop-1 {
        0% {
            clip: rect(36px,9999px,9px,0)
        }
    
        25% {
            clip: rect(25px,9999px,99px,0)
        }
    
        50% {
            clip: rect(50px,9999px,102px,0)
        }
    
        75% {
            clip: rect(30px,9999px,92px,0)
        }
    
        100% {
            clip: rect(91px,9999px,98px,0)
        }
    }
    
    @-webkit-keyframes glitch-loop-2 {
        0% {
            top: -1px;
            left: 1px;
            clip: rect(65px,9999px,119px,0)
        }
    
        25% {
            top: -6px;
            left: 4px;
            clip: rect(79px,9999px,19px,0)
        }
    
        50% {
            top: -3px;
            left: 2px;
            clip: rect(68px,9999px,11px,0)
        }
    
        75% {
            top: 0;
            left: -4px;
            clip: rect(95px,9999px,53px,0)
        }
    
        100% {
            top: -1px;
            left: -1px;
            clip: rect(31px,9999px,149px,0)
        }
    }
    
    @keyframes glitch-loop-2 {
        0% {
            top: -1px;
            left: 1px;
            clip: rect(65px,9999px,119px,0)
        }
    
        25% {
            top: -6px;
            left: 4px;
            clip: rect(79px,9999px,19px,0)
        }
    
        50% {
            top: -3px;
            left: 2px;
            clip: rect(68px,9999px,11px,0)
        }
    
        75% {
            top: 0;
            left: -4px;
            clip: rect(95px,9999px,53px,0)
        }
    
        100% {
            top: -1px;
            left: -1px;
            clip: rect(31px,9999px,149px,0)
        }
    }

`;