const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送响应数据
  res.end('Hello, world!');
});

// 监听端口
const port = 3008;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});