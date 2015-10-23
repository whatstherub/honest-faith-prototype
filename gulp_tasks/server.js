import gulp from 'gulp';
import koaService from 'gulp-koa-service';

gulp.task( 'run', () => {
  return gulp.src('index.js')
    .pipe(koaService({
      "env": {
        "PORT": 8000,
        "NODE_ENV": "dev",
        "NODE_OPTIONS": "--debug=47977"
      }
    }))
});
