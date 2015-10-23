import gulp from 'gulp';
import browserSync from 'browser-sync';
import watch from 'gulp-watch';


gulp.task('serve', [ 'combined-js-slim' ], function() {
  watch('src/**/*.slim', function() {
    gulp.start('combined-js-slim');
  });

  watch('src/**/*.scss', function() {
    gulp.start('scss');
  });

  watch('src/**/*.js', function() {
    gulp.start('combined-js-slim');
  });
});
