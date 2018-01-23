import gulp from 'gulp';
import exit from 'gulp-exit';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';
import bower from 'gulp-bower';
import eslint from 'gulp-eslint';
import nodemon from 'gulp-nodemon';
import browserSync from 'browser-sync';
import livereload from 'gulp-livereload';

gulp.task('bower', () => {
  bower().pipe(gulp.dest('./bower_components'));
});

gulp.task('reload-html', () => {
  setTimeout(() => {
    gulp.src(['public/views/**']).pipe(livereload());
  }, 1000);
});

gulp.task('reload-css', () => {
  setTimeout(() => {
    gulp.src(['./public/css']).pipe(livereload());
  }, 1000);
});


gulp.task('watch', () => {
  gulp.watch('app/views/**', browserSync.reload());
  gulp.watch('public/js/**', browserSync.reload());
  gulp.watch('app/**/*.js', browserSync.reload());
  gulp.watch('public/views/**', browserSync.reload());
  gulp.watch('public/**/*.html', ['reload-html', 'rebuild']);
  gulp.watch('public/**/*.css', ['reload-css', 'rebuild']);
});

gulp.task('eslint', () => {
  gulp.src(['gulpfile.babel.js',
    'public/js/**/*.js',
    'test/**/*.js',
    'app/**/*.js',
    'config/**/*.js'
  ])
    .pipe(eslint());
});

gulp.task('nodemon', () => {
  nodemon({
    script: './production/server.js', // run ES5 code
    ext: 'js html jade json scss css',
    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
    watch: ['app', 'config', 'public', 'server.js'], // watch ES2015 code
    env: {
      PORT: 3000,
      NODE_ENV: 'development'
    },
    tasks: ['rebuild']
  });
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

// transfer bower packages(dependencies) for introjs
gulp.task('intro.js', () => {
  gulp.src('bower_components/intro.js/**/*')
    .pipe(gulp.dest('./public/lib/intro.js'));
});

gulp.task('transfer-bower', ['angular', 'bootstrap', 'angularUtils', 'angular-bootstrap', 'intro.js']);

gulp.task('test', () => {
  gulp.src('./test/**/*.js')
    .pipe(mocha({
      reporter: 'spec',
      exit: true,
      compilers: 'babel-core/register'
    }))
    .pipe(exit());
});

gulp.task('move-json', () => {
  gulp.src('config/env/*.json')
    .pipe(gulp.dest('./production/config/env'));
});

gulp.task('move-test-json', () => {
  gulp.src('test/*json')
    .pipe(gulp.dest('./production/test'));
});

gulp.task('move-public', () => {
  gulp.src(['public/**/*', '!public/js/**'])
    .pipe(gulp.dest('./production/public'));
});

gulp.task('move-jade', () => {
  gulp.src('app/views/**/*')
    .pipe(gulp.dest('./production/app/views'));
});

gulp.task('babel', () =>
  gulp.src(['./**/*.js', '!production/**', '!bower_components/**/*', '!node_modules/**',
    '!gulpfile.babel.js'])
    .pipe(babel())
    .pipe(gulp.dest('production')));

gulp.task('install', ['bower']);

gulp.task('move-files', ['move-json', 'move-jade', 'move-test-json', 'move-public']);

gulp.task('build', ['transfer-bower', 'move-files', 'babel']);

gulp.task('rebuild', ['babel', 'move-json', 'move-jade', 'move-test-json', 'move-public']);

gulp.task('default', ['nodemon', 'watch']);
