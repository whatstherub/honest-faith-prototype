var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    cache   = require('gulp-cached'),
    slm     = require('gulp-slm'),
    concat  = require('gulp-concat'),
    remember   = require('gulp-remember'),
    minifyHtml = require('gulp-minify-html'),
    ngHtml2Js  = require('gulp-ng-html2js');

gulp.task('slim', function(){
  return gulp.src('src/**/*.slim')
    .pipe(plumber())
    .pipe(cache('slim'))
    .pipe(slm())
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngHtml2Js({
      moduleName: 'templates'
    }))
    .pipe(remember('slim'))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('assets/js'));
});
