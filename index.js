var koa = require('koa'),
    serve = require('koa-static');

var app = koa();


app.use(serve('.'));
app.listen(8000);
