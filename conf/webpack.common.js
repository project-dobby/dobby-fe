const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("./path");
const styleLoader = require('./styleLoader');

const mode = process.env.NODE_ENV || 'dev';
const isDev = mode === 'dev';

module.exports = {
    target: "web",
    entry: [ "@babel/polyfill", "./src/index.client.tsx"],
    output: {
        path: path.dist,
        filename: "index.js",
    },
    resolve: {
        alias: {
            src: path.src,
        },
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            ...styleLoader(isDev),
            {
                test: /\.(tsx|ts)$/,
                include: [
                    path.src,
                ],
                loader: "babel-loader",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.appHtml,
        }),
    ],
};
