const Koa = require('koa');
const routes = require('./routes');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());
app.use(routes());


app.listen('3001');
console.log('start at port 3001 ...');
