'use strict';

let gulp = require('gulp');
let connect = require('gulp-connect');
 
gulp.task('server', function() {
    connect.server();
});
 
gulp.task('default', ['server']);
