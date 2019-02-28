const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('./path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.dist,
        publicPath: '/dist/',
        filename: 'build.js',
    },
    resolve: {
        alias: {
            src: path.src,
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                include: [
                    path.src
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Dobby',
            template: 'src/index.html'
        })
    ],
};
