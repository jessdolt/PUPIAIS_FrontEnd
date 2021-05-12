const path = require('path')

module.exports = {
    entry: './assets/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'production')
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'production'),
        /* hot: true */
    },
    mode:"development"
}