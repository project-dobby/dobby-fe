const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("./path");

module.exports = {
    target: "web",
    entry: "./src/index.client.tsx",
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
    node: {
        fs: "empty",
        net: "empty",
    },
    module: {
        rules: [
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
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.appHtml,
        }),
    ],
};
