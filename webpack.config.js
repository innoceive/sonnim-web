var glob = require('glob');

module.exports = {
    entry: glob.sync('./src/main/js/*.js'),
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
       path: __dirname,
       filename: './src/main/resources/static/js/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets:['react','es2015']
                }
            }
        ]
    }
};
