const gulp = require('gulp');
const bower = require('gulp-bower');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const exit = require('gulp-exit');


// generate bower components
gulp.task('bower', () => {
  bower().pipe(gulp.dest('./bower_components'));
});

gulp.task('nodemon', () => {
  nodemon({
    script: 'server.js', // run ES5 code
    ext: 'js html jade json scss css',
    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
    watch: ['app', 'config', 'public', 'server.js'], // watch ES2015 code
    env: {
      PORT: 3000,
      NODE_ENV: 'development'
    }
  });
});

// watch files in public and app directories for changes
gulp.task('watch', () => {
  gulp.watch('app/views/**', browserSync.reload());
  gulp.watch('public/js/**', browserSync.reload());
  gulp.watch('app/**/*.js', browserSync.reload());
  gulp.watch('public/views/**', browserSync.reload());
  gulp.watch('public/css/common.scss', ['sass']);
  gulp.watch('public/css/**', browserSync.reload());
});

// compile scss to css
gulp.task('sass', () => {
  gulp.src('public/css/common.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css/'));
});

// provide linting for files
gulp.task('eslint', () => {
  gulp.src(['gulpfile.babel.js',
      'public/js/**/*.js',
      'test/**/*.js',
      'app/**/*.js',
      'config/**/*.js'
    ])
    .pipe(eslint());
});

// transfer bower packages(dependencies) for angularjs library
gulp.task('angular', () => {
  gulp.src('bower_components/angular/**/*.js')
    .pipe(gulp.dest('./public/lib/angular'));
});

// transfer bower packages(dependencies) for bootstrap library
gulp.task('bootstrap', () => {
  gulp.src('bower_components/bootstrap/**/*')
    .pipe(gulp.dest('./public/lib/bootstrap'));
});

// transfer bower packages(dependencies) for jquery library
gulp.task('jquery', () => {
  gulp.src('bower_components/jquery/**/*')
    .pipe(gulp.dest('./public/lib/jquery'));
});

// transfer bower packages(dependencies) for underscore library
gulp.task('underscore', () => {
  gulp.src('bower_components/underscore/**/*')
    .pipe(gulp.dest('./public/lib/underscore'));
});

// transfer bower packages(dependencies) for angular UI utility library
gulp.task('angularUtils', () => {
  gulp.src('bower_components/angular-ui-utils/modules/route/route.js')
    .pipe(gulp.dest('./public/lib/angular-ui-utils/modules'));
});

// transfer bower packages(dependencies) for angular bootstrap library
gulp.task('angular-bootstrap', () => {
  gulp.src('bower_components/angular-bootstrap/**/*')
    .pipe(gulp.dest('./public/lib/angular-bootstrap'));
});

gulp.task('transfer-bower', ['angular', 'bootstrap', 'jquery', 'underscore', 'angularUtils', 'angular-bootstrap']);

gulp.task('test', () => {
  gulp.src('./test/**/*.js')
    .pipe(mocha({
      reporter: 'spec',
      timeout: '500000'
    }))
    .pipe(exit());
});

gulp.task('install', ['bower']);

gulp.task('build', ['sass', 'transfer-bower']);

gulp.task('default', ['nodemon', 'watch']);