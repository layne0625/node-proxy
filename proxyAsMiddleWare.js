var httpProxy = require("http-proxy");

var proxy = httpProxy.createProxyServer({
  target: "http://10.2.240.16",
  headers: {
    host: "offline.fx.fws.qa.nt.ctripcorp.com"
  }
  // 下面的设置用于https
  /* ssl: {
    key: fs.readFileSync("server_decrypt.key", "utf8"),
    cert: fs.readFileSync("server.crt", "utf8")
  },
  secure: false */
});

export default function proxyMiddleware(req, res, next) {
  if (/\/tour\//.test(req.url)) {
    // 接口走代理
    proxy.web(request, response);
  } else {
    next();
  }
}
