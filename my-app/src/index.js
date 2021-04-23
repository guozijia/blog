import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import APP from './app'

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import '@/assets/css/reset.less'//css重置

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <BrowserRouter>
            <APP></APP>
        </BrowserRouter>
    </ConfigProvider>,
    document.getElementById('root')
)