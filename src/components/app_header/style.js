import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: ${props => props.mouseDown ? "-60px" : 0};
  left: 0;
  z-index: 999;
  height: 60px;
  width:100%;
  font-size: 14px;
  font-weight:bold;
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 8px rgb(104 104 104 / 20%);
  transition:all .5s; 

  .content {
    height: 60px;
    display: flex;
    justify-content: space-between;
    
    .logo {
      display: flex;
      width: 200px;
      height: 60px;
      background-position: 0 0;
      img{
        width:40px;
        margin-left: 20px;
      }
      h2{
        line-height:60px;
        margin-left: 12px;
      }
    //text-indent: -9999px; //logo加文字，让其显示在浏览器外
    }
    .main-nav{
      display:none;
    }
  }
  @media all and (max-width: 768px){
    .nav-list{
      background: #fff;
      border-top: 1px solid #e7e7e7;
      .nav-item{
        a{
          text-align: center;
          line-height: 48px;
          display:block;
        }
              
      }
    }
    .nav-enter , .nav-appear{
    opacity: 0;
    transform: scale(1.1);
    }
    .nav-enter-active , .nav-appear-active{
        opacity: 1;
        transform: scale(1);
        transition: all 300ms
    }
    .nav-enter-done , .nav-appear-done{
        transition: all 300ms
    }

    .nav-exit{
        opacity: 1;
        transform: scale(1);
    }
    .nav-exit-active{
        opacity: 0;
        transform: scale(1.1);
        transition: all 500ms
    }
    .content{
      .logo{
        display:none;
      }
      .main-nav{
        
        display: flex;
        align-items: center;
        padding: 8px;
      }
    }
  }
`

export const HeaderLeft = styled.div`
  width:960px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .gucciFrom{
     .search {
      width: 200px;
      height: 32px;
      border-radius: 16px;
      margin-right: 18px;
      input {
        &::placeholder {
          font-size: 12px;
        }
      }
    }

    .editMoment{
      color:#333333;
      font-size:13px;

      &:hover {
        /* color:#ff6000 ; */
        text-decoration: none;
      }

    }
  }
  
  .select-list {
    display: flex;
    line-height: 60px;

    .select-item {
      position: relative;
      a {
          display: block;
          padding:0 30px;
          color: #222531;
          font-size: 15px;
      }

      &:hover a, a.active {
        color: #1dc989;
        //background: #000;
        text-decoration: none;
      }
    }
  }

  @media all and (max-width: 768px){
    .select-list{
      display: none;
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`