import styled from 'styled-components'

export const EditorWrapper = styled.div`
    .w-e-toolbar {
        border-right: none !important;
    }
    .w-e-text-container {
        border: none !important;
        min-height: 100vh;
    }
    .editor-top{
        display: flex;
        justify-content:space-between;
        align-items:center;
        height: 48px;
        background: #fff;
        margin-bottom: 6px;
    }
    .logo {
      display: flex;
      width: 200px;
      height: 60px;
      background-position: 0 0;
      img{
        width:40px;
        margin-left: 10px;
      }
      h2{
        line-height:60px;
        margin-left: 12px;
      }
    }
`