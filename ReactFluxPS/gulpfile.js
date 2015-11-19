"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser

// local configuration

var config = {
    port: 1974,
    devBaseUrl: 'http://www.tharnode.com',
    paths: {
        html: './src/*.html',
        //js: './src/**/*.js',
        dist: './dist'
        //mainJs: './src/main.js'
    }
};

//Start a local development server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// Opens html files

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html']);
});

//gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);

gulp.task('default', ['html', 'open']);