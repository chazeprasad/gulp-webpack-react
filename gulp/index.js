const fs          = require('fs');
const gulp        = require('gulp');
const onlyScripts = require('./util/scriptFilter');
const {argv}      = require('yargs');
const requireDir = require('require-dir');

// If gulp was called in the terminal with the --prod flag, set the node environment to production
if (argv.prod) {
  process.env.NODE_ENV = 'production';
}
global.PROD = process.env.NODE_ENV === 'production';

// Ensure process ends after all Gulp tasks are finished
gulp.on('stop', function () {
  if ( !global.isWatching ) {
    process.nextTick(function () {
      process.exit(0);
    });
  }
});

requireDir('./task', { recurse: true });

