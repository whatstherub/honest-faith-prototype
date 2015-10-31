var koa = require('koa'),
    auth  = require('koa-basic-auth'),
    gzip  = require('koa-gzip'),
    serve = require('koa-static');

var app = koa();

var port = process.env['PORT'] || 8000,
    environment = process.env['NODE_ENV'] == 'production' ? 'production' : 'development';

if( environment == 'production' ) {
  app.use(function *(next){
    try {
      yield next;
    } catch (err) {
      if (401 == err.status) {
        this.status = 401;
        this.set('WWW-Authenticate', 'Basic');
        this.body = 'cant haz that';
      } else {
        throw err;
      }
    }
  });

  app.use(auth({
    name: 'honest',
    pass: 'faith'
  }));
}

app.use(gzip());
app.use(serve('web'));

app.listen(port);
