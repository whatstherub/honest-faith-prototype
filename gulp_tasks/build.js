import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', function(done){
  runSequence('js:bower',
              ['scss', 'combined-js-slim'],
              done);
});
