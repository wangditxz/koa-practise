const Koa = require('koa');
const routes = require('./routes');
const bodyParser = require('koa-bodyparser');
// 解决跨域问题
const cors = require('koa2-cors');
// jwt
const koaJwt = require('koa-jwt');
const pathToRegexp = require('path-to-regexp');
// 配置信息
const { serverPort, jwtSecret } = require('./config');

const app = new Koa();

app.use(cors());

app.use(koaJwt({ secret: jwtSecret }).unless(ctx => {
    return pathToRegexp([
        '/login',
        '/register'
      ]).test(ctx.path);
}));



app.use(bodyParser());
app.use(routes());


app.listen(serverPort);
console.log(`start at port ${serverPort} ...`);
