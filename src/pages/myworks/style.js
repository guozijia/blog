import styled from 'styled-components'

export const MyworksWrapper = styled.div`
    margin-right: 200px;
    margin-left: 200px;
    margin-top:72px;
    .modalCard{
        position: 'fixed';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: 'rgba(0,0,0,0.3)';
        display: 'flex';
        justify-content: 'center';
        align-items: 'center';
    }
`

export const CardWrapper = styled.div`
        position: relative;
        overflow:hidden;
        border-radius:1em;
        img{
            width:100%;
            transform: scale(${props => props.inProp ? 1.1 : 1});
            cursor: pointer;
            transition:.3s all
            /* border-radius: 8px; */
            /* :hover{
                transform: scale(1.1);
                transition:.3s all
            } */
        }
        .maskText{
            position: absolute;
            bottom: 0;
            padding: 12px;
            background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9));
            width: 100%;
            color: #fff;
            
        }
        .mask-enter {
            opacity: 0;
        }
        .mask-enter-active {
            opacity: 1;
            transition: opacity 300ms, transform 300ms;
        }
        .mask-enter-done{
            transition: all 300ms
        }
        .mask-exit {
            opacity: 1;
        }
        .mask-exit-active {
            opacity: 0;
            transition: opacity 300ms, transform 300ms;
        }
        .mask-exit-done{

        }
`

export const DetailWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 999;
    .closeBtn{
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        padding: 12px;
    }
    .contentDtail{
        background-color:#fff;
        border-radius: 1em 1em 0 0;
        height: 100%;
    }
`

