import gulp from 'gulp';
import mainBowerFiles from 'main-bower-files';

gulp.task('bower', function(){
  return gulp.src(mainBowerFiles('**/!(angular-mocks).js'), { base: 'vendor/assets/bower_components' })
    .pipe(concat('dependencies.js'))
    .pipe(gulp.dest('web/assets/js'));
});
