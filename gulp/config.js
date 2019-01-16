const baseDir = './';
const buildDir = './dist';

let config = {

    baseDir: baseDir,
    buildDir: buildDir,
    entry: './src/app/Main.js',
    
    assets: {
        src: './src/assets/**/*',
        dest: buildDir + '/assets'
    },
    html: {
        src: './src/index.html',
        dest: buildDir
    }
}


module.exports = config;