'use strict';

import gulp from 'gulp';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';

let bs = browserSync.create();

gulp.task('build:js', ['bundle'], () =>
  gulp.src('dist/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('docs'))
);

gulp.task('build:css', () =>
  gulp.src('src/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('docs'))
);

gulp.task('build', ['build:js', 'build:css', 'pug'], () =>
  gulp.src('dist/index.html')
    .pipe(gulp.dest('docs'))
);

gulp.task('pug', () =>
  gulp.src('src/**/*.pug')
    .pipe(pug({pretty: true}))
    .on("error", notify.onError((error) => error.message))
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
    .on("error", notify.onError((error) => error.message))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream({once: true}))
);

gulp.task('default', ['pug', 'sass', 'bundle'], () => {
  bs.init({
    host: process.env.IP || null,
    port: process.env.PORT || 3000,
    server: 'dist'
  });

  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch("src/**/*.scss", ['sass']);
  gulp.watch('src/**/*.js', ['bundle']);
});
