const http = require('http');
const { dbLib } = require('./db.js');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  if (req.url.includes('/favicon.ico')) {
    return;
  }

  // 设置响应头
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const params = urlObj.searchParams;
  console.log('%c 🌮 params: ', 'font-size:20px;background-color: #42b983;color:#fff;', params);

  let title = params.get('title') || '';
  let time = params.get('time') || '';

  try {
    title = decodeURIComponent(params.get('title') || '');
    time = decodeURIComponent(params.get('time') || '');
  } catch (error) {
    console.log(error);
  }

  console.log('title,,', title);
  console.log('time,,', time);

  if (req.url.includes('/add')) {
    dbLib.add({ time, title });
    res.end('This is the /add API');
  } else if (req.url.includes('/query')) {
    let r = dbLib.query({ title, time });
    res.end(r ? 'true' : 'false');
  } else {
    // 处理其他请求
    res.end('Hello, World!');
  }
});

// 监听端口
const port = 3008;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
