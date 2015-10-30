var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    cache   = require('gulp-cached'),
    babel   = require('gulp-babel'),
    remember = require('gulp-remember'),
    uglify   = require('gulp-uglify'),
    gulpif   = require('gulp-if'),
    argv     = require('yargs').argv,
    concat   = require('gulp-concat'),
    mainBowerFiles = require('main-bower-files');

gulp.task('js', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(plumber())
    .pipe(cache('scripts'))
    .pipe(babel({
      modules: 'system',
      moduleIds: true
    }))
    .pipe(remember('scripts'))
    .pipe(concat('app2.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('js:bower', function() {
  var bowerGlob = '**/*.js',
      bowerConfig = { base: 'vendor/assets/bower_components' };
    
  return gulp.src(mainBowerFiles(bowerGlob), bowerConfig)
             .pipe(concat('deps.js'))
             .pipe(gulpif(argv.env == 'production' || argv.env == 'staging', uglify()))
             .pipe(gulp.dest('assets/js'));
});
