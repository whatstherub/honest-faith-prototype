var koa = require('koa'),
    serve = require('koa-static');

var app = koa();

var port = process.env['PORT'] || 8000,
    environment = process.env['NODE_ENV'] == 'production' ? 'production' : 'development';

if( environment == 'production' ) {
  app.use(auth({
    name: 'honest',
    pass: 'faith'
  });
} 

app.use(serve('web'));
app.listen(port);
