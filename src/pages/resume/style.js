import styled from 'styled-components'
import ImgPage1 from '@/assets/img/as-img-01.jpg'

export const ResumeWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    margin-top:60px;
    .resumepage1{
        width:100%;
        background-image:url(${ImgPage1});
        background-size: cover;
        background-position: center center;
        .content{
            width: 900px;
            margin: 0 auto;
            padding: 60px;
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
                font-size: 16px;
                max-width: 600px;
                margin: 0 auto;
                margin-bottom: 8px;
                color: #fff;
                line-height:20px;
            }
        }
    }
`