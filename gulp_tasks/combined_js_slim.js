var gulp = require('gulp'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    argv = require('yargs').argv;

gulp.task('combined-js-slim', ['js','slim'], function() {
  return gulp.src([
                   'src/templates.js',
                   'src/application.js',
                   'src/config.js'])
    .pipe(concat('app.js'))
    .pipe(gulpif(argv.env == 'production' || argv.env == 'staging', uglify()))
    .pipe(gulp.dest('assets/js'));
});
