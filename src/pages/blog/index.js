import React, { memo } from 'react'
import { Divider, Tooltip } from 'antd';
import { NavLink } from 'react-router-dom'
import { HighlightOutlined, FontColorsOutlined, GitlabOutlined, DisconnectOutlined, LinkOutlined } from '@ant-design/icons'
import { ResumeWrapper, CardWrapper } from './style'

export default memo(function HYResume () {

    return (
        <ResumeWrapper>
            <div className="main-nav-wrap">
                <div className="nav-cont">
                    <ul>
                        <li>
                            <Tooltip placement="right" title={"写博客"}>
                            <NavLink to="/blog">
                                <HighlightOutlined style={{ fontSize: "18px" }} />
                            </NavLink>
                            </Tooltip>
                        </li>
                        <div className="divider"></div>
                        <li><NavLink to="/blog"><FontColorsOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                        <li><NavLink to="/blog"><GitlabOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                        <li><NavLink to="/blog"><DisconnectOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                        <li><NavLink to="/blog"><LinkOutlined style={{ fontSize: "18px" }} /></NavLink></li>
                    </ul>
                </div>
                <div className="nav-btm"></div>
            </div>
            <div className='main'>
                <CardWrapper>
                    <h1>你所知道的http的响应码及含义？</h1>
                    <h4>2021年4月23日  by Author</h4>
                    <p>
                        1xx(临时响应)

                        100: 请求者应当继续提出请求。

                        101(切换协议) 请求者已要求服务器切换协议，服务器已确认并准备进行切换。

                        2xx(成功)

                        200：正确的请求返回正确的结果

                        201：表示资源被正确的创建。比如说，我们 POST 用户名、密码正确创建了一个用户就可以返回 201。

                        202：请求是正确的，但是结果正在处理中，这时候客户端可以通过轮询等机制继续请求。

                        3xx(已重定向)

                        300：请求成功，但结果有多种选择。

                        301：请求成功，但是资源被永久转移。

                        303：使用 GET 来访问新的地址来获取资源。

                        304：请求的资源并没有被修改过

                        4xx(请求错误)

                        400：请求出现错误，比如请求头不对等。

                        401：没有提供认证信息。请求的时候没有带上 Token 等。

                        402：为以后需要所保留的状态码。

                        403：请求的资源不允许访问。就是说没有权限。

                        404：请求的内容不存在。

                        5xx(服务器错误)

                        500：服务器错误。

                        501：请求还没有被实现。
                    </p>
                    <Divider />
                    <h1>10种跨域解决方案~</h1>
                    <h4>2021年3月15日  by Author</h4>
                    <p>
                        1.CORS
                        跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器 让运行在一个 origin (domain) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器「不同的域、协议或端口」请求一个资源时，资源会发起一个「跨域 HTTP 请求」。
                        而在 cors 中会有 简单请求 和 复杂请求的概念。<br />
                        2.Node 正向代理
                        代理的思路为，利用服务端请求不会跨域的特性，让接口和当前站点同域。<br />
                        3.Nginx 反向代理
                        Nginx 则是通过反向代理的方式，（这里也需要自定义一个域名）这里就是保证我当前域，能获取到静态资源和接口，不关心是怎么获取的。<br />
                        4.JSONP
                        JSONP 主要就是利用了 script 标签没有跨域限制的这个特性来完成的。
                        「使用限制」
                        仅支持 GET 方法，如果想使用完整的 REST 接口，请使用 CORS 或者其他代理方式。
                        「流程解析」
                        1.前端定义解析函数（例如 jsonpCallback=function()等等）
                        2.通过 params 形式包装请求参数，并且声明执行函数(例如 cb=jsonpCallback)
                        3.后端获取前端声明的执行函数（jsonpCallback），并以带上参数并调用执行函数的方式传递给前端。<br />
                        5.Websocket
                        WebSocket 规范定义了一种 API，可在网络浏览器和服务器之间建立“套接字”连接。简单地说：客户端和服务器之间存在持久的连接，而且双方都可以随时开始发送数据。详细教程可以看 https://www.html5rocks.com/zh/tutorials/websockets/basics/<br />
                        6.window.postMessage
                        「window.postMessage()」 方法可以安全地实现跨源通信。通常，对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为 https），端口号（443 为 https 的默认值），以及主机 (两个页面的模数 Document.domain设置为相同的值) 时，这两个脚本才能相互通信。「window.postMessage()」 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全<br />
                        7.document.domain + Iframe
                        从第 7 种到第 9 种方式，我觉得别人的写的已经很好了，为了完整性，我就拿别人的了。如有雷同....（不对，就是雷同....）不要说不出来。<br />
                        8.window.location.hash + Iframe
                        原理就是通过 url 带 hash ，通过一个非跨域的中间页面来传递数据。<br />
                        9.window.name + Iframe
                        window 对象的 name 属性是一个很特别的属性，当该 window 的 location 变化，然后重新加载，它的 name 属性可以依然保持不变。<br />
                        10.浏览器开启跨域
                    </p>
                    <Divider />
                    <h1>Git下载速度慢的最佳解决方案~</h1>
                    <h4>2021年3月15日  by Author</h4>
                    <p>
                        使用github cnpmjs镜像

                        当你要clone一个repository，然后特别嫌弃他的速度的时候

                        可以将本来的

                        git clone https://github.com/xxx.git
                        改成：

                        git clone https://github.com.cnpmjs.org/xxx.git
                        这样通过代理可以比较轻松地加速
                    </p>

                </CardWrapper>
            </div>
        </ResumeWrapper>
    )
})
