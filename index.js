var koa = require('koa'),
    serve = require('koa-static');

var app = koa();

var port = process.env['NODE_SERVER_PORT'] || 8000;

app.use(serve('.'));
app.listen(port);
