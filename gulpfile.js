/**
 *  The gulp tasks are split into several files
 *  See in the `gulp` directory
 */

'use strict';

var gulp = require('gulp');
var fs = require('fs');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.js$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and builds
 *  the application ready for production deployment
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
