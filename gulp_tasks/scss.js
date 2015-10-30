import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import mainBowerFiles from 'main-bower-files';
import concat from 'gulp-concat';
import path from 'path';
import wiredep from 'wiredep';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('scss', ['css:application', 'css:libraries', 'fontawesome']);

var bowerGlob = ['**/*.scss','**/*.css'],
    bowerConfig = { base: 'vendor/assets/bower_components' };

gulp.task('fontawesome', function() {
  return gulp.src([
    bowerConfig.base + '/font-awesome/fonts/**.*',
    bowerConfig.base + '/bootstrap-sass/assets/fonts/*/**.*'
  ]).pipe(gulp.dest('assets/fonts'));
});

gulp.task('css:application', function(){
  var scssLoadPaths = mainBowerFiles(bowerGlob, bowerConfig)

  var paths = scssLoadPaths.map( (p) => {
    return path.dirname(p)
  });

  return gulp.src('src/css/application.scss')
    .pipe(sass({
      indentedSyntax: false,
      includePaths: paths
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('css:libraries', function(){
  return gulp.src('src/css/libraries.scss')
    .pipe(sass({ indentedSyntax: false }))
    .on('error', sass.logError)
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});
