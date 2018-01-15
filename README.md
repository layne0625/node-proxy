## node 代理使用。

### node-http-proxy 文档 https://github.com/nodejitsu/node-http-proxy

### usage

1. 作为代理服务器。见 index.html && proxy.js
2. 作为 node 中间件。 见 proxyAsMiddleWare.js

### issue

1. 代理的地址为域名时(如： www.baidu.com)， 需将域名换为 ip 地址， 然后将域名设置在参数中。 直接代理域名， 会出现地址为 404 的情况。详情见 proxyAsMiddleWare.js
