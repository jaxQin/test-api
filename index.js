const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    console.log(ctx.req.url)
    const urlObj = new URL(ctx.req.url, `http://${ctx.req.headers.host}`);
    const params = urlObj.searchParams;
    console.log('%c 🌮 params: ', 'font-size:20px;background-color: #42b983;color:#fff;', params);
    ctx.body = 'Hello Vercel, Hi Koa2';
});


app.listen(3008, () => {
    console.log('3008项目启动')
});
