const path = require('path');

module.exports = {
    src: path.resolve(__dirname, '../src'),
    index: path.resolve(__dirname, '../src/index.html'),
    dist: path.resolve(__dirname, '../dist'),
    public: path.resolve(__dirname, '../public'),
    appHtml: path.resolve(__dirname, '../public/index.html')
};