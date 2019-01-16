const config = require('../config');
const changed = require('gulp-changed');
const gulp = require('gulp');


gulp.task('assets', function () {
    return gulp.src(config.assets.src)
        .pipe(changed(config.assets.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.assets.dest))
});