
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../../webpack.config.js");

gulp.task("build-dev", function() {
	gulp.watch(["./src/app/**/*"], ["serve"]);
});