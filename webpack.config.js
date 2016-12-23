var glob = require('glob');

module.exports = {
    entry: glob.sync('./react/*.js'),
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
       path: __dirname,
       filename: './public/javascripts/built/bundle.js'
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
