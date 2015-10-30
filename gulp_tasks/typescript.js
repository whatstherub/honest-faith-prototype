var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    cache   = require('gulp-cached'),
    typescript  = require('gulp-typescript'),
    remember    = require('gulp-remember'),
    concat   = require('gulp-concat');

gulp.task('ts', function () {
  var tsProject = typescript.createProject('src/js/tsconfig.json');

  return gulp.src(['src/**/*.ts'])
    .pipe(plumber())
    .pipe(cache('typescripts'))
    .pipe(typescript(tsProject))
    .pipe(remember('typescripts'))
    .pipe(concat('ts.js'))
    .pipe(gulp.dest('web/assets/js'));
});
