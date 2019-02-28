const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('./path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.dist,
        historyApiFallback: true,
        port: 9000,
    },
    performance: {
        hints: false,
    },
});