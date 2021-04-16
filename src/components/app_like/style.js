import styled from 'styled-components'
export const LikeWrapper = styled.div`

    padding-bottom: 12px;

    .likecard{
        /* p{
            line-height:34px;
        } */
        span{
            font-size:12px;
            color:#6d747a;
        }
    }

    .comment-enter , .comment-appear{
        opacity: 0;
        transform: translateY(6%);
    }

    .comment-enter-active , .comment-appear-active{
        opacity: 1;
        transform: translateY(0);
        transition: all 300ms
    }

    .comment-enter-done , .comment-appear-done{
        transition: all 300ms
    }

    .comment-exit{
        opacity: 1;
        transform: translateY(0%);
    }

    .comment-exit-active{
        opacity: 0;
        transform: translateY(10%);
        transition: all 300ms
    }

`