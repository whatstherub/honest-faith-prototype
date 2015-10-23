import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp_tasks');

gulp.task( 'default', ['serve'] );


