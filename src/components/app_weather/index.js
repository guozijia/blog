import React, { memo, useEffect } from 'react'
import { AppWeatherWrapper} from './style'

export default memo(function HYUser () {
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        const script = document.createElement('script');
        script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
        body.appendChild(script);
    }, [])
    return (
        <AppWeatherWrapper>
            <div id="he-plugin-standard"></div>
        </AppWeatherWrapper>
    )
})
