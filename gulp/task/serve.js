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


gulp.task("serve", function(callback) {
	// modify some webpack config options
	var myConfig = Object.assign(webpackConfig);
	myConfig.devtool = "eval";
	// myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});