var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../../webpack.config.js");  

// modify some webpack config options
var myDevConfig = Object.assign(webpackConfig);
myDevConfig.devtool = "sourcemap";

// myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);


gulp.task("bundle:dev", function(callback) {
	// run webpack
	return devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});