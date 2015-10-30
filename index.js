var koa = require('koa'),
    serve = require('koa-static');

var app = koa();

var port = process.env['PORT'] || 8000;

app.use(serve('web'));
app.listen(port);
