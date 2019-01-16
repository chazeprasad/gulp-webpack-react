
const gulp = require('gulp');
const insertLines = require('gulp-insert-lines');
const cond = require('gulp-cond');
const config = require('../config');


gulp.task('html', () => {
    return gulp.src(config.html.src)
    .pipe(cond(global.PROD, insertLines({
      before: /<\/head>$/,
      'lineBefore': '<link rel="stylesheet" href="bundle.css"/>'
    })))
    .pipe(gulp.dest(config.html.dest));
  });
  