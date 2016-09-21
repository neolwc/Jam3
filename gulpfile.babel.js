'use strict';

import gulp from 'gulp';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';

let bs = browserSync.create();

gulp.task('pug', () =>
  gulp.src('src/**/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream({once: true}))
);

gulp.task('sass', () =>
  gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream())
);

gulp.task('bundle', () =>
  browserify('src/index.js', {transform: [babelify]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream({once: true}))
);

gulp.task('default', ['pug', 'sass', 'bundle'], () => {
  bs.init({
    host: process.env.IP,
    port: process.env.PORT,
    server: 'dist'
  });

  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch("src/**/*.scss", ['sass']);
  gulp.watch('src/**/*.js', ['bundle']);
});
