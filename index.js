const Koa = require('koa');
const app = new Koa();
const { dbLib } = require('./db.js');


app.use(async ctx => {
    console.log(ctx.req.url)
    const urlObj = new URL(ctx.req.url, `http://${ctx.req.headers.host}`);
    const params = urlObj.searchParams;
    console.log('%c 🌮 params: ', 'font-size:20px;background-color: #42b983;color:#fff;', params);


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


    if (req.url.includes('/add')) {
        dbLib.add({ time, title });
        // res.end('This is the /add API');
    } else if (req.url.includes('/query')) {
        let r = dbLib.query({ title, time });
        // res.end(r ? 'true' : 'false');
        ctx.body = r ? 'true' : 'false';

    } else {
        // 处理其他请求
        ctx.body = 'Hello Vercel, Hi Koa2';

    }
});


app.listen(3008, () => {
    console.log('3008项目启动')
});
