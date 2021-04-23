import { memo } from 'react'
import ReactDOM from 'react-dom'

export default memo(function HYModal (props) {
    return (
        ReactDOM.createPortal(
            props.children,
            document.getElementById('modal')
        )
    )
})
