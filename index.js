var koa     = require('koa'),
    auth    = require('koa-basic-auth'),
    gzip    = require('koa-gzip'),
    router  = require('koa-router'),
    serve   = require('koa-static');

var app = koa(),
    appRouter = router(),
    apiRouter = router();

var port = process.env['PORT'] || 8000,
    environment = process.env['NODE_ENV'] == 'production' ? 'production' : 'development';

var productEndpoint = require('./web/api/products/index'),
    productHistoryEndpoint = require('./web/api/products/history');

apiRouter.get('/products', productEndpoint);
apiRouter.get('/products/:id/history', productHistoryEndpoint);

appRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

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

app
  .use(gzip())
  .use(appRouter.routes())
  .use(appRouter.allowedMethods())
  .use(serve('web'));

app.listen(port);
