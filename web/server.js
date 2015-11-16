let koa     = require('koa'),
    auth    = require('koa-basic-auth'),
    gzip    = require('koa-gzip'),
    router  = require('koa-router'),
    serve   = require('koa-static'),
    _       = require('lodash');

let basicAuthGate = require('./basic_auth_gate');

var app = koa(),
    appRouter = router(),
    apiRouter = router();

var port = process.env['PORT'] || 8000,
    environment = process.env['NODE_ENV'] == 'production' ? 'production' : 'development';

let apiRouteTable = {
  '/products': '/products/index',
  '/products/:id/history': '/products/history'
};

_.each( apiRouteTable, (v,k) => {
  apiRouter.get( k, require(`./api${v}`) );
});

appRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

if( environment == 'production' ) {
  app
    .use(basicAuthGate)
    .use(auth({
      name: 'honest',
      pass: 'faith'
    }));
}

app
  .use(gzip())
  .use(appRouter.routes())
  .use(appRouter.allowedMethods())
  .use(serve('web'))
  .listen(port);
