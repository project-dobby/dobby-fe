const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('./path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        // not declaring path and publicPath,
        // this will be under the webpack-dev-server folder.
        filename: 'index.js',
        chunkFilename: '[name].chunk.js',
    },
    devServer: {
        contentBase: path.public,
        historyApiFallback: true,
        watchContentBase: true,
        port: 9001,
    },
    performance: {
        hints: false,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PROJECTION_ENV': JSON.stringify('client')
        })
    ]
});